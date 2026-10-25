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
