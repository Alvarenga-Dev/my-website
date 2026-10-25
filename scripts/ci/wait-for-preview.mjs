import { appendFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

export function previewOrigin(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || !url.hostname.endsWith('.vercel.app') || url.username || url.password || url.port) {
    throw new Error('O preview deve usar HTTPS em um domínio *.vercel.app da Vercel.');
  }
  return url.origin;
}

export async function waitForPreview({
  request,
  sha,
  environment = 'Preview',
  timeoutMs = 12 * 60_000,
  intervalMs = 15_000,
  now = Date.now,
  sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
  log = console.log,
}) {
  const deadline = now() + timeoutMs;
  while (now() < deadline) {
    const deployments = await request(`/deployments?sha=${encodeURIComponent(sha)}&environment=${encodeURIComponent(environment)}&per_page=100`);
    // Never accept an old commit, production, or another project's environment.
    const deployment = deployments
      .filter((candidate) => candidate.sha === sha && candidate.environment === environment && !candidate.production_environment)
      .sort((left, right) => right.id - left.id)[0];

    if (deployment) {
      const [status] = await request(`/deployments/${deployment.id}/statuses?per_page=100`);
      log(`Deploy ${deployment.id}: ${status?.state || 'aguardando status'}`);
      if (status?.state === 'failure' || status?.state === 'error' || status?.state === 'inactive') {
        throw new Error(`O deploy do commit ${sha} terminou em ${status.state}. Consulte o deployment no GitHub/Vercel.`);
      }
      if (status?.state === 'success') {
        return previewOrigin(status.environment_url || status.target_url);
      }
    } else {
      log(`Aguardando deployment ${environment} para ${sha}.`);
    }
    await sleep(intervalMs);
  }
  throw new Error(`Timeout aguardando preview do commit ${sha}. Verifique a integração GitHub/Vercel e PREVIEW_ENVIRONMENT.`);
}

async function main() {
  const { GITHUB_REPOSITORY: repository, GITHUB_TOKEN: token, PR_HEAD_SHA: sha } = process.env;
  if (!repository || !token || !sha) throw new Error('GITHUB_REPOSITORY, GITHUB_TOKEN e PR_HEAD_SHA são obrigatórios.');
  const url = await waitForPreview({
    sha,
    environment: process.env.PREVIEW_ENVIRONMENT || 'Preview',
    request: async (path) => {
      const response = await fetch(`https://api.github.com/repos/${repository}${path}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) throw new Error(`GitHub Deployments API: HTTP ${response.status}. Confira a permissão deployments: read.`);
      return response.json();
    },
  });
  console.log(`Preview pronto: ${url}`);
  await appendFile(process.env.GITHUB_OUTPUT, `url=${url}\n`);
  await appendFile(process.env.GITHUB_STEP_SUMMARY, `Preview do commit \`${sha}\`: ${url}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
