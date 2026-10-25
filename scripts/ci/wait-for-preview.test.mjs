import assert from 'node:assert/strict';
import test from 'node:test';
import { previewOrigin, waitForPreview } from './wait-for-preview.mjs';

const deployment = { id: 10, sha: 'current', environment: 'Preview', production_environment: false };
const success = { state: 'success', environment_url: 'https://portfolio-123.vercel.app' };

function options(deployments, statuses) {
  let elapsed = 0;
  let poll = 0;
  return {
    sha: 'current',
    timeoutMs: 100,
    intervalMs: 25,
    now: () => elapsed,
    sleep: async (ms) => { elapsed += ms; },
    log: () => {},
    request: async (path) => path.includes('/statuses')
      ? [statuses[Math.min(poll++, statuses.length - 1)]]
      : deployments,
  };
}

test('aguarda a conclusão e usa a URL do commit solicitado', async () => {
  assert.equal(await waitForPreview(options([deployment], [{ state: 'in_progress' }, success])), success.environment_url);
});

test('deploy com falha não passa como CI verde', async () => {
  await assert.rejects(waitForPreview(options([deployment], [{ state: 'failure' }])), /terminou em failure/);
});

test('preview ausente, antigo ou de produção expira com erro', async () => {
  for (const deployments of [[], [{ ...deployment, sha: 'old' }], [{ ...deployment, production_environment: true }], [{ ...deployment, environment: 'Production' }]]) {
    await assert.rejects(waitForPreview(options(deployments, [success])), /Timeout/);
  }
});

test('redeploy mais recente tem prioridade sobre sucesso antigo', async () => {
  const configuration = options([deployment, { ...deployment, id: 11 }], [{ state: 'error' }]);
  const request = configuration.request;
  configuration.request = async (path) => {
    if (path.includes('/statuses')) assert.match(path, /deployments\/11\/statuses/);
    return request(path);
  };
  await assert.rejects(waitForPreview(configuration), /terminou em error/);
});

test('URLs externas ou inseguras não recebem o segredo de bypass', () => {
  for (const url of ['http://project.vercel.app', 'https://vercel.app.evil.test', 'https://evil.test', 'https://user:password@project.vercel.app']) {
    assert.throws(() => previewOrigin(url));
  }
});
