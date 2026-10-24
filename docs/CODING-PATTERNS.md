# Padrões de codificação — Portfolio Lucas Alvarenga

Este documento descreve os padrões de implementação do projeto e serve como referência para manter consistência em novas telas, componentes e ajustes de conteúdo.

## 1. Visão geral do projeto

O repositório é um portfólio pessoal em Next.js com foco em:

- apresentação profissional e marca pessoal;
- exibição de experiência, educação e projetos;
- navegação por seções com scroll suave;
- suporte a internacionalização em português e inglês;
- CTA para redes sociais, portfólio e download de currículo.

A estrutura atual é simples, com UI principalmente em componentes React e dados estáticos em arquivos centralizados.

## 2. Arquitetura e organização

### 2.1 Estrutura principal

```text
app/
├── [locale]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── portfolio/page.tsx
├── globals.css
├── favicon.ico
├── fonts/
└── ...
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
└── pt.json
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

### 2.2 Responsabilidades por camada

- `app/[locale]/layout.tsx`: raiz do site por locale; define metadata, provider de mensagens e fontes locais.
- `app/[locale]/page.tsx`: página principal do portfolio; reúne as seções e o layout geral.
- `components/*`: blocos de interface usados por página inicial, como Hero, AboutMe, Carrer, Projects, Footer e Navbar.
- `content/data.tsx`: dados estruturados de links, redes sociais e listas de experiência/projetos.
- `content/*.json`: textos e traduções do sistema i18n.
- `i18n/routing.ts`: configuração de rotas e locales `pt` e `en`.
- `public/*`: ativos estáticos (SVGs, imagens, PDF e logo).
- `utils/utils.ts`: helpers simples, como funções de abertura de links.

## 3. Padrões de componentes

### 3.1 Componentes do tipo seção

As seções da página principal são componentes independentes com interface clara:

- `Hero`
- `AboutMe`
- `Carrer`
- `Projects`
- `Footer`
- `NavBar`

Esses componentes seguem o padrão de reuso do Next.js App Router e permanecem focados em apresentação, sem lógica de negócio complexa.

### 3.2 Classe de responsabilidade por componente

- Componentes de UI: `Button`, `Card`, `NavBar`, `Footer`.
- Componentes de seção: `Hero`, `Projects`, `AboutMe`, `Carrer`.
- Dados e conteúdo: `content/*.json` e `content/data.tsx`.
- Configuração de app: `app/[locale]/layout.tsx`, `middleware.ts`, `i18n/routing.ts`.

## 4. Regras de arquitetura

### 4.1 Server Components por padrão

O projeto usa Server Components como base. Interações específicas do navegador, como `useState`, `useEffect`, `window`, ou `document`, ficam restritas aos componentes que realmente precisam delas.

Exemplo correto:

```tsx
const Hero: React.FC = () => {
  const t = useTranslations('hero')

  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Lucas Alvarenga CV.pdf'
    link.click()
  }

  return <button onClick={downloadCV}>Baixar currículo</button>
}
```

Nesse caso, o comportamento do navegador é necessário e seu escopo é local ao componente.

### 4.2 Evitar abstrações antes da necessidade

O projeto ainda não possui camadas de dados, repository, API ou client services. Isso é saudável para o estágio atual, mas exige disciplina:

- não criar abstrações genéricas para algo que ainda não existe;
- não introduzir arquitetura de domínio antes de haver caso de uso real;
- não encapsular dados estáticos em múltiplas camadas se um arquivo central já resolve o problema.

## 5. Dados e conteúdo

### 5.1 Conteúdo em JSON e dados estruturados

A aplicação usa duas fontes principais de dados:

1. `content/*.json` para textos multilíngues;
2. `content/data.tsx` para arrays e links de redes sociais e projetos.

Isso mantém a UI livre de strings hardcoded e facilita a manutenção de traduções.

Exemplo de uso:

```tsx
const t = useTranslations('projects')

const projectsData = [
  {
    name: t('project1.name'),
    description: t('project1.description'),
    link: t('project1.link'),
    image: t('project1.image'),
    technologies: t('project1.technologies').split('|')
  }
]
```

### 5.2 Padrão para listas em i18n

Como `next-intl` não trata arrays nativamente em JSON, o projeto usa strings separadas por pipe (`|`) e depois faz o split no componente.

Exemplo:

```json
"technologies": "MVVM | Koin | Componentes customizados"
```

```tsx
const technologies = t('project1.technologies').split('|')
```

Essa convenção deve ser preservada para evitar inconsistência entre idiomas.

## 6. Internacionalização

O projeto usa `next-intl` com locale segmentado em URL.

### 6.1 Locales

```ts
export const routing = defineRouting({
  locales: ['en', 'pt'],
  defaultLocale: 'pt'
})
```

### 6.2 Rotas

- `/pt` e `/en` são as rotas principais;
- a navegação usa wrappers do `next-intl` para manter a URL sincronizada com o locale atual.

### 6.3 Boas práticas

- manter chaves consistentes entre `pt.json` e `en.json`;
- preferir chaves semânticas e específicas (`hero.saudation`) em vez de nomes genéricos;
- não misturar textos de UI com conteúdo de negócio em componentes; use o provider de traduções.

## 7. Estilo e estrutura visual

### 7.1 Tailwind como base

O estilo é construído com Tailwind e uma extensão de tokens customizados em `tailwind.config.ts`.

Tokens principais:

- `primary`
- `background-primary`
- `background-secondary`
- `background-tertiary`
- `background-quaternary`
- `white-500`, `white-400`, `white-300`, `white-200`, `white-100`
- `gray-500`

Esses valores são derivados das variáveis globais em `app/globals.css`.

### 7.2 CSS global

`app/globals.css` define:

- escala de cores;
- background e scrollbar customizados;
- ajustes de `scroll-behavior` e `scroll-margin-top` para navegação por seção.

Ao adicionar estilos específicos, preferir tokens existentes em vez de criar paletas novas sem necessidade.

## 8. Componentes específicos do projeto

### 8.1 `Button`

O componente `Button` é um wrapper de ação com duas variações principais:

- `primary`
- `secondary`

Ele usa `tailwind-variants` para centralizar a API visual.

Regras:

- manter a API simples: `color`, `text`, `onClick`;
- evitar lógica extra dentro do componente;
- usar ele para CTAs primários e secundários.

### 8.2 `Card`

`Card` serve como container de experiências e educação. Ele renderiza:

- ícone;
- título;
- local;
- período;
- descrição ou lista de itens.

A estrutura segue o padrão de cards de timeline do portfólio.

### 8.3 `NavBar`

`NavBar` realiza três ações principais:

- navegação por seção;
- controle do locale (`pt` / `en`);
- abertura de menu mobile.

Use `useEffect` para atualizar a seção ativa conforme o scroll. Isso é um padrão válido porque a lógica depende do DOM e da rolagem.

### 8.4 `Projects`

`Projects` usa `swiper` para criar um carrossel horizontal de cards. A notícia importante é que a lógica é totalmente dependente do navegador, então o componente precisa ser `use client`.

## 9. Convenções de nomenclatura

### 9.1 Arquivos e diretórios

- diretórios de componentes: `kebab-case` ou nomes curtos e semânticos;
- arquivos: preferir o nome do componente em PascalCase apenas quando houver um componente React;
- páginas do App Router: `page.tsx` e `layout.tsx` continuam em minúsculas por convenção do framework.

### 9.2 Variáveis e funções

- variáveis e funções: `camelCase`;
- constantes globais: `UPPER_SNAKE_CASE` apenas quando forem realmente globais;
- componentes React: `PascalCase`.

### 9.3 Dados de domínio

- `projectsData`, `SocialsLinks`, `MyLinks` e `experiencesData` são nomes claros e representativos do domínio do portfolio.
- evite nomes genéricos como `items`, `data` ou `obj` em contextos onde o componente já tem forte semântica.

## 10. Acessibilidade e UX

O projeto tem uma forte base de acessibilidade, mas ainda pode ser melhorado em alguns pontos. Os padrões atuais incluem:

- uso de `alt` em imagens;
- uso de elementos semânticos e seções com `id` para navegação;
- botões e ações com cursor e feedback visual;
- links e ações abertas em nova janela ou em redirecionamento externo via helper.

### Boas práticas a seguir

- manter textos alternativos informativos;
- preservar contraste suficiente no tema escuro;
- não usar `div` como botão quando `button` ou `a` já resolvem melhor;
- priorizar navegação por teclado em qualquer novo componente interativo.

## 11. Performance e manutenção

- imagens locais em `public/images` devem ser preferidas ao uso de URLs externas;
- o projeto depende de assets estáticos e imagens de portfolio;
- dados de conteúdo devem permanecer em `content/` para facilitar atualização sem mexer em lógica de UI;
- novas seções devem ser adicionadas como componentes e conectadas pela página principal, e não por lógica duplicada.

## 12. Checklist para novos trechos de código

Antes de entregar qualquer alteração, validar:

- o componente está no lugar correto (seção, componente base ou helper);
- o texto foi movido para `content/*.json` quando relevante;
- a internacionalização foi considerada;
- o código permanece estático quando não há necessidade de estado local;
- a nova UI respeita a paleta e o tema dark já estabelecidos.

## 13. Resumo

O projeto atual é um portfolio pessoal simples, enxuto e bem centrado em conteúdo, com arquitetura adequada ao seu estágio e forte padronização de UI baseada em Tailwind. A melhor prática para continuar evoluindo o projeto é manter a separação clara entre:

- conteúdo;
- tecnologia de renderização (Next.js + App Router);
- componentes de interface;
- internacionalização.

Isso permite evoluir sem introduzir complexidade desnecessária.
