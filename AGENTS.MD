# Lucas Alvarenga Portfolio — Instruções para Agentes

> Este arquivo deve permanecer conciso e orientar a implementação e manutenção do portfólio pessoal do Lucas Alvarenga.

## 1. Contexto do projeto

- Produto: portfólio pessoal e site profissional de Lucas Alvarenga.
- Tipo de aplicação: Next.js App Router com páginas e componentes estáticos.
- Objetivo principal: apresentar experiência, projetos, redes sociais, contato e download de currículo.
- Público principal: recrutadores, clientes, colegas e seguidores de tecnologia.

## 2. Ambiente e execução

### Requisitos

- Node.js compatível com Next.js do repositório.
- npm com `package-lock.json` versionado.
- Sem variáveis de ambiente obrigatórias no momento.

### Comandos

```bash
npm ci
npm run dev
npm run build
npm run start
```

URL local esperada: `http://localhost:3000`

## 3. Arquitetura

A estrutura atual é simples e orientada a conteúdo e UI:

```text
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── portfolio/page.tsx
├── globals.css
├── fonts/
components/
├── aboutMe/
├── button/
├── card/
├── carrer/
├── footer/
├── hero/
├── navbar/
├── projects/
└── SEO/
content/
├── data.tsx
├── en.json
├── pt.json
i18n/
├── request.ts
├── routing.ts
public/
├── images/
├── logo-white.svg
├── cv.pdf
└── ...
utils/
└── utils.ts
```

### Regras de arquitetura

- Prefira Server Components e use `"use client"` somente quando houver interação real do navegador.
- Mantenha apresentação, textos e dados separados: UI em `components/`, conteúdo em `content/` e configuração em `i18n/`.
- Não introduza camadas de domínio, API ou repository sem um uso real e documentado.
- Preserve a estrutura por locale em `app/[locale]`.

## 4. Padrões de codificação

- Use `camelCase` para variáveis e funções; `PascalCase` para componentes React.
- Mantenha nomes claros e específicos; evite genéricos como `item`, `data` e `thing` quando existir contexto.
- Componentes de seção devem concentrar composição visual e texto, mas não lógica de negócio complexa.
- Dados estáticos e textos multilíngues devem ficar em `content/*.json` ou `content/data.tsx`.
- Quando o conteúdo vier do i18n, use `useTranslations` e mantenha chaves consistentes entre PT e EN.

## 5. Internacionalização

- O projeto usa `next-intl` e locales `pt` e `en`.
- As rotas seguem o padrão `/pt` e `/en`.
- Sempre mantenha a mesma estrutura de chaves em `content/pt.json` e `content/en.json`.
- Para listas, o projeto usa strings com separador `|` e depois faz `split('|')` no componente.

Exemplo:

```json
"technologies": "MVVM | Koin | Componentes customizados"
```

```tsx
const technologies = t('project1.technologies').split('|')
```

## 6. Estilo e design system

- A base visual é dark-first e usa Tailwind com tokens personalizados.
- Os principais tokens são: `primary`, `background-*`, `white-*` e `gray-500`.
- O CSS global fica em `app/globals.css` e os tokens em `tailwind.config.ts`.
- Prefira reutilizar paleta, espaçamentos e padrões do projeto em vez de criar valores novos sem necessidade.
- Siga a identidade visual do portfólio: contraste alto, foco em leitura e destaque em azul.

## 7. Acessibilidade

- Use HTML semântico sempre que possível.
- Preserve `alt` em imagens e labels em controles interativos.
- Evite `div` clicável quando `button` ou `a` é melhor.
- Mantenha foco visível e contraste suficiente no tema escuro.
- Respeite comportamento acessível em mobile e desktop.

## 8. Validação

Antes de concluir alterações, execute as validações relevantes:

```bash
npx tsc --noEmit
npm run build
```

Obs.: `npm run lint` ainda não é a validação principal neste projeto, e ajustes de lint devem ser tratados conforme a rotina atual do repositório.

## 9. Documentação relevante

- `docs/CODING-PATTERNS.md`
- `docs/DESIGN-SYSTEM.md`

Use estes arquivos como fonte de padrões e identidade visual para novas tarefas.

## 10. Regras gerais

- Manter a implementação enxuta e consistente com o projeto atual.
- Não criar abstrações complexas antes de haver necessidade real.
- Não mexer em conteúdo ou textos sem considerar traduções e internacionalização.
- Preservar a marca pessoal e o tom profissional do portfólio.
