import { expect, test } from '@playwright/test';
import portuguese from '../../content/pt.json';

test.beforeEach(async ({ context, baseURL }) => {
  // Scope the Vercel bypass to this origin, including redirects and assets.
  const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  if (bypass && baseURL) {
    await context.route('**/*', async (route) => {
      const headers = { ...route.request().headers() };
      delete headers['x-vercel-protection-bypass'];
      if (new URL(route.request().url()).origin === new URL(baseURL).origin) {
        headers['x-vercel-protection-bypass'] = bypass;
      }
      await route.continue({ headers });
    });
  }
});

for (const locale of ['pt', 'en']) {
  test(`portfólio em ${locale} carrega sem erros de execução ou assets`, async ({ page, baseURL }) => {
    const runtimeErrors: string[] = [];
    const failedAssets: string[] = [];
    page.on('pageerror', (error) => runtimeErrors.push(error.message));
    page.on('response', (response) => {
      if (new URL(response.url()).origin === new URL(baseURL!).origin && response.status() >= 400) {
        failedAssets.push(`${response.status()} ${new URL(response.url()).pathname}`);
      }
      // Third-party resources are outside the deploy's health check.
    });
    page.on('requestfailed', (request) => {
      if (new URL(request.url()).origin === new URL(baseURL!).origin && request.failure()?.errorText !== 'net::ERR_ABORTED') {
        failedAssets.push(new URL(request.url()).pathname);
      }
    });

    const response = await page.goto(`/${locale}`, { waitUntil: 'networkidle' });
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page.getByRole('heading', { level: 1, name: /Lucas Alvarenga/ })).toBeVisible();
    await expect(page.locator('#projects')).toBeAttached();
    expect(runtimeErrors).toEqual([]);
    expect(failedAssets).toEqual([]);
  });
}

test('raiz redireciona para português', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveURL(/\/pt\/?$/);
  await expect(page.getByRole('heading', { level: 1, name: /Lucas Alvarenga/ })).toBeVisible();
});

test('links mantém a URL pública e canonicaliza os locales', async ({ page }) => {
  for (const path of ['/links', '/pt/links', '/en/links']) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveURL(/\/links\/?$/);
    await expect(page.getByText('Lucas Alvarenga', { exact: true })).toBeVisible();
  }
});

test('CTA baixa um currículo PDF válido', async ({ page }) => {
  await page.goto('/pt');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: portuguese.hero.cvButton, exact: true }).click();
  const download = await downloadPromise;
  expect(await download.failure()).toBeNull();
  const stream = await download.createReadStream();
  const chunks: Buffer[] = [];
  for await (const chunk of stream) chunks.push(Buffer.from(chunk));
  expect(Buffer.concat(chunks).subarray(0, 5).toString()).toBe('%PDF-');
});

for (const locale of ['pt', 'en']) {
  test(`Marketplace List em ${locale} tem página própria e alterna as capturas`, async ({ page }) => {
    await page.goto(`/${locale}`);
    const projectLink = page.locator(`#projects a[href="/${locale}/marketplace-list"]`);
    await expect(projectLink).toHaveCount(1);
    await projectLink.scrollIntoViewIfNeeded();
    await projectLink.click();
    await expect(page).toHaveURL(new RegExp(`/${locale}/marketplace-list$`));
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page).toHaveTitle('Marketplace List | Lucas Alvarenga');
    await expect(page.locator('html')).toHaveAttribute('lang', locale);

    const gallery = page.locator('#inside-app');
    const light = gallery.getByRole('button', { name: locale === 'pt' ? 'Tema claro' : 'Light mode' });
    const dark = gallery.getByRole('button', { name: locale === 'pt' ? 'Tema escuro' : 'Dark mode' });
    await expect(dark).toHaveAttribute('aria-pressed', 'true');
    await light.click();
    await expect(light).toHaveAttribute('aria-pressed', 'true');
    for (const screenshot of await gallery.locator('img').all()) {
      await expect(screenshot).toHaveAttribute('src', /-light\.webp/);
      await expect(screenshot).toHaveJSProperty('complete', true);
      expect(await screenshot.evaluate((image) => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    await dark.click();
    await expect(dark).toHaveAttribute('aria-pressed', 'true');
    await expect(gallery.locator('img').first()).toHaveAttribute('src', /-dark\.webp/);
    await expect(page.getByRole('link', { name: /Google Play/ }).first()).toHaveAttribute('href', 'https://play.google.com/store/apps/details?id=com.alvarengadev.marketplacelist');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

for (const locale of ['pt', 'en']) {
  for (const legalDocument of [
    { path: 'politica-de-privacidade', title: 'Política de Privacidade — Lista de Compras', sections: 21, updatedAt: '27/04/2026' },
    { path: 'termos-de-uso', title: 'Termos de Uso — Lista de Compras', sections: 13, updatedAt: '29 de outubro de 2026' },
  ] as const) {
    test(`documento ${legalDocument.path} do Marketplace List acessível a partir de ${locale}`, async ({ page }) => {
      const runtimeErrors: string[] = [];
      page.on('pageerror', error => runtimeErrors.push(error.message));
      await page.goto(`/${locale}/marketplace-list`);
      const legalNavigation = page.getByRole('navigation', { name: locale === 'pt' ? 'Informações legais do aplicativo' : 'App legal information' });
      const documentLink = legalNavigation.locator(`a[href="/pt/marketplace-list/${legalDocument.path}"]`);
      await expect(documentLink).toBeVisible();
      await documentLink.click();
      await expect(page).toHaveURL(new RegExp(`/pt/marketplace-list/${legalDocument.path}$`));
      await expect(page.getByRole('heading', { level: 1, name: legalDocument.title, exact: true })).toBeVisible();
      await expect(page.locator('main')).toHaveAttribute('lang', 'pt-BR');
      await expect(page.locator('article')).toContainText(legalDocument.updatedAt);
      const contents = page.getByRole('navigation', { name: 'Nesta página' });
      await expect(contents.getByRole('link')).toHaveCount(legalDocument.sections);
      expect(await contents.locator('a').evaluateAll(links => links.every(link => !!document.getElementById((link as HTMLAnchorElement).hash.slice(1))))).toBe(true);
      await contents.getByRole('link').first().click();
      await expect(page.locator('article h2').first()).toBeInViewport();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

      if (legalDocument.path === 'termos-de-uso') {
        await page.getByRole('link', { name: 'Política de Privacidade', exact: true }).click();
        await expect(page).toHaveURL(/\/pt\/marketplace-list\/politica-de-privacidade$/);
      }
      // Legal copy stays in Portuguese even when a localized URL is opened directly.
      await page.goto(`/${locale}/marketplace-list/${legalDocument.path}`);
      await expect(page.locator('main')).toHaveAttribute('lang', 'pt-BR');
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://www.alvarenga.dev/pt/marketplace-list/${legalDocument.path}`);
      await page.locator('header').getByRole('link').click();
      await expect(page).toHaveURL(new RegExp(`/${locale}/marketplace-list$`));
      expect(runtimeErrors).toEqual([]);
    });
  }
}

test('documentos do OddWord mantêm índice, tabelas e retorno ao jogo', async ({ page }) => {
  for (const documentPath of ['politica-de-privacidade', 'termos-de-uso']) {
    await page.goto(`/pt/quem-e-o-infiltrado/${documentPath}`);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Quem é o Infiltrado?');
    const contents = page.getByRole('navigation', { name: 'Nesta página' });
    expect(await contents.getByRole('link').count()).toBeGreaterThan(0);
    await contents.getByRole('link').first().click();
    await expect(page.locator('article h2').first()).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.locator('header').getByRole('link', { name: 'Voltar ao jogo' }).click();
    await expect(page).toHaveURL(/\/pt\/quem-e-o-infiltrado$/);
  }
});
