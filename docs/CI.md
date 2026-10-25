# CI e validação do preview

O workflow `.github/workflows/ci.yml` executa em todo PR, em pushes na `main` e manualmente no GitHub Actions. Novos commits cancelam a execução anterior do mesmo PR.

## Verificações

1. Instala as dependências com `npm ci`, usando Node 22 definido em `.nvmrc`.
2. Confere a paridade das chaves de tradução PT/EN e testa a lógica de acompanhamento dos deployments.
3. Executa `tsc --noEmit` e `next build`.
4. Inicia o build com `next start` e roda Playwright em Chromium desktop e mobile.
5. Em PRs do próprio repositório, aguarda até 12 minutos pelo deployment Vercel do **SHA da branch do PR** e executa os mesmos testes contra a URL publicada.
6. Consolida o resultado em `CI required`: falha de build, testes, deploy ou timeout impede o sucesso desse check.

Os testes de navegador verificam `/pt`, `/en`, redirecionamento da raiz com idioma PT, `/links` e seus redirecionamentos, e download de um PDF válido pelo botão do currículo. As páginas do portfólio também são verificadas quanto a exceções JavaScript e respostas de erro/falhas de rede de recursos da própria origem. Recursos externos não entram na avaliação de saúde do deploy.

Relatórios HTML e screenshots de falhas ficam nos artifacts `smoke-production` e `smoke-preview` por 7 dias. Traces são salvos somente no teste local do build; ficam desativados no preview para não registrar o header de bypass. O workflow conserva os logs de cada etapa. Não realiza deploy de produção: acompanha o preview criado pela integração existente da Vercel.

## Configuração no GitHub e Vercel

1. Conecte este repositório ao projeto correto da Vercel e habilite previews para as branches dos PRs. O deployment deve ser registrado no GitHub com o SHA da branch e estado final; a API de Deployments é a fonte usada pelo CI.
2. O ambiente esperado é `Preview`. Se o projeto registra outro nome (ou houver vários projetos Vercel ligados ao repositório), crie a variável de Actions `PREVIEW_ENVIRONMENT` com o nome exato do ambiente do projeto desejado.
3. Se houver Deployment Protection, gere um **Protection Bypass for Automation** na Vercel e salve seu valor no secret de Actions `VERCEL_AUTOMATION_BYPASS_SECRET`. Ele é enviado apenas à origem do preview. O workflow aceita URLs HTTPS `*.vercel.app`; domínios customizados exigem ajustar a validação em `scripts/ci/wait-for-preview.mjs`.
4. Depois que o workflow estiver publicado e executar uma vez, configure um ruleset/proteção da `main` exigindo o status **CI required** antes do merge. Selecione o check gerado por GitHub Actions; habilite também a exigência de branch atualizada para validar o merge candidato atual.

Sem deployment, com deploy quebrado ou proteção sem o secret correto, o check de PR **falha**. Não há fallback para a URL de produção nem para commits anteriores.

PRs de forks executam build e testes locais, mas não executam testes de preview com secrets. Por isso, `CI required` permanece reprovado nesses PRs. Para validar o fluxo completo, um mantenedor deve revisar o código e abrir o PR a partir de uma branch do próprio repositório. O workflow usa `pull_request`, sem execução privilegiada por `pull_request_target`.

Em `push` na `main` e `workflow_dispatch`, apenas o build e os testes do servidor local são executados; a validação de preview é específica dos PRs. Um erro no preview deve ser investigado nos Deployments do GitHub e nos logs da Vercel; corrija e reexecute o workflow após um novo deploy do mesmo commit, ou envie um novo commit ao PR.

## Executar localmente

```bash
nvm use
npm ci
npm run check:i18n
npm run test:ci
npm run typecheck
npm run build
npx playwright install chromium
npm run test:smoke
```

Os testes iniciam um servidor de produção próprio na porta 3000. Se ela estiver ocupada, use `PORT=3100 npm run test:smoke`. Para um preview público: `PLAYWRIGHT_BASE_URL=https://seu-preview.vercel.app npm run test:smoke`. Nesse caso, o Playwright não inicia servidor local.

O comando legado `npm run lint` não foi incluído como gate: o projeto usa Next 15 e ainda não tem uma rotina de lint independente configurada. O build mantém as verificações nativas existentes.

Referências: [GitHub Deployments](https://docs.github.com/en/rest/deployments/deployments), [status de deployment](https://docs.github.com/en/rest/deployments/statuses), [bypass da Vercel para automação](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation) e [servidor de testes do Playwright](https://playwright.dev/docs/test-webserver).
