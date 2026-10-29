# Marketplace List — mapa da apresentação

Objetivo: apresentar o app no portfólio com um card atualizado e uma página própria, seguindo a composição da página do OddWord.

## Referências e escopo

Fonte: `Marketplace-List-prints-2026-10-28`, capturas de 28/10/2026, versão 4.0.10 (59). Foram consultados o LEIA-ME, inventário e as sete pranchas que cobrem os 60 prints. Os documentos da pasta são evidências do produto, não instruções de implementação.

A página apresenta funcionalidades observadas. Não implementa o aplicativo, scanner, armazenamento, permissões, anúncios ou operações de backup. As capturas contêm dados de demonstração e textos em português, inclusive na versão inglesa da página.

## Regiões e contrato

| Região | Evidência | Implementação |
| --- | --- | --- |
| Card | Itens e total no tema escuro | Composição HTML com amarelo do app, nome, captura e acesso à página no locale atual; substitui a apresentação antiga do mesmo projeto. |
| Hero | Listas preenchidas e itens nos dois temas | Duas capturas estáticas, título, descrição, link existente do Google Play e âncora para a galeria. |
| Fluxo | Criar lista → adicionar/marcar itens → finalizar e consultar histórico | Três etapas de apresentação e captura do histórico; sem controles simulados. |
| Recursos | Categorias, unidades, configurações de backup e moeda | Quatro descrições. Backup descrito como opção das configurações; sem alegação de operação validada. |
| Galeria | Listas, itens e histórico nos temas claro e escuro | Botões com `aria-pressed` alternam as três imagens e seus textos alternativos. Tema inicial escuro. |
| Nota fiscal | Seletor de criação e orientações; scanner indisponível no emulador | Apresentação identificada como beta. Não afirma precisão, execução ou sucesso de OCR. |
| CTA e rodapé | Link do Google Play já cadastrado no portfólio | Acesso à loja e retorno ao portfólio no mesmo idioma. |

## Estados, conteúdo e movimento

- A única interação nova é a seleção do tema na galeria. Não altera o tema global nem persiste preferências.
- Screenshots não são interfaces operáveis. Preços, totais e compras não representam dados reais do usuário.
- Composição estática, sem animações automáticas ou dependência de movimento para leitura.
- Conteúdo e textos alternativos em `content/pt.json` e `content/en.json`, namespace `marketplaceList`.
- Tipografia DM Sans já disponível no projeto; cores do produto centralizadas em `tailwind.config.ts` sob `marketplace`.
- Capturas selecionadas convertidas para WebP de 750 × 1500, sem alteração dos dados visuais. Originais permanecem na pasta de referência.

## Limites das evidências

Não foram capturados OCR, revisão de produtos reconhecidos, consentimento de anúncios nem execução de importação/exportação de backup. Não há evidência para afirmar ausência de anúncios, funcionamento totalmente offline, sincronização, cadastro ou suporte iOS.

## Pontos de implementação

- `components/projects/index.tsx`: card e navegação interna pelo destino do projeto.
- `components/marketplace-list/`: capa e galeria com seleção de tema.
- `app/[locale]/marketplace-list/page.tsx`: página Server Component e metadata.
- `public/images/marketplace-list/`: capturas otimizadas usadas na apresentação.
