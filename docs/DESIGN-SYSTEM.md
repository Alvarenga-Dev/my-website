# Design System — Portfolio Lucas Alvarenga

Este documento descreve o sistema visual do portfólio e organiza as decisões de identidade, estrutura, tokens e componentes que sustentam a interface atual.

## 1. Visão geral

O projeto usa um visual dark-first, sob medida para apresentação profissional e conteúdo tecnológico. A identidade visual é moderna, enxuta e focada em legibilidade, com forte contraste, alto aproveitamento de espaço e foco em planos escuros com elementos de destaque em azul.

### Direção visual principal

- fundo principal escuro;
- textos em branco e cinza claro;
- destaque em azul como sinal de acento primário;
- uso de imagens e cards em blocos organizados para dar ritmo visual;
- arquitetura de páginas em seções longas, com navegação fixa e scroll suave.

A composição atual é compatível com um portfolio técnico, ou seja, com forte leitura de texto e pouca exigência de regras decorativas complexas.

## 2. Paleta de cores

Os tokens de cor centralizam-se em `app/globals.css` e em `tailwind.config.ts`.

### 2.1 Tokens globais

```css
:root {
  --primary: 0 159 227;

  --bg-primary: 22 22 22;
  --bg-secondary: 32 32 32;
  --bg-tertiary: 41 41 41;
  --bg-quaternary: 51 51 51;

  --white-500: 255 255 255;
  --white-400: 241 241 241;
  --white-300: 212 212 212;
  --white-200: 206 207 208;
  --white-100: 205 205 205;

  --gray-500: 190 141 141;
}
```

### 2.2 Mapeamento para Tailwind

```ts
colors: {
  primary: 'rgb(var(--primary))',
  'background-primary': 'rgb(var(--bg-primary))',
  'background-secondary': 'rgb(var(--bg-secondary))',
  'background-tertiary': 'rgb(var(--bg-tertiary))',
  'background-quaternary': 'rgb(var(--bg-quaternary))',
  'white-500': 'rgb(var(--white-500))',
  'white-400': 'rgb(var(--white-400))',
  'white-300': 'rgb(var(--white-300))',
  'white-200': 'rgb(var(--white-200))',
  'white-100': 'rgb(var(--white-100))',
  'gray-500': 'rgb(var(--gray-500))',
}
```

### 2.3 Uso semântico

- `primary`: azul como ação principal, destaque e CTA.
- `background-primary`: base do site.
- `background-secondary`: cards e blocos de superfície elevadas.
- `background-tertiary` e `background-quaternary`: variações de contraste para composições internas.
- `white-*`: textos e elementos claros.
- `gray-500`: uso secundário em ícones e superfície de apoio.

## 3. Tipografia

A tipografia principal é a `DMSans`, carregada localmente via `next/font/local` em `app/[locale]/layout.tsx`.

### Tokens de tipografia

- Família: `DMSans`, fallback `sans-serif`.
- Peso principal: 400, 500, 600, 700.
- Uso em títulos, body text e botões.

### Padrões de uso

- títulos grandes em branco ou azul em destaque;
- body text em `text-white-400` ou `text-white-300`;
- textos secundários com baixo contraste para criações de hierarquia visual;
- botão principal com destaque de alto contraste sobre fundo escuro.

## 4. Layout e espaçamento

O layout usa Tailwind com container centralizado e breakpoints customizados em `tailwind.config.ts`:

```ts
screens: {
  sm: '600px',
  md: '728px',
  lg: '984px',
  xl: '1240px',
  '2xl': '1496px'
}
```

### Princípios

- conteúdo centralizado em container com padding horizontal;
- seções empurradas por `mt-20`, `mt-36`, `mb-20` e similares;
- o layout usa blocos verticais para dar ritmo, e não uma grade demasiado complexa;
- as peças principais são mais largas em desktop e mais compactas em mobile.

## 5. Componentes do design system

### 5.1 `Button`

Arquivo: `components/button/index.tsx`

#### Propriedade visual

- `primary`: fundo azul e texto branco;
- `secondary`: fundo escuro, borda clara e texto branco.

#### Direção de uso

- CTA primário para ação principal, como "Aprenda mais comigo";
- CTA secundário para ações complementares, como baixar CV.

#### Padrões

```tsx
const button = tv({
  base: 'font-medium px-4 py-3 rounded-lg cursor-pointer transition ease-in-out duration-300',
  variants: {
    color: {
      primary: 'bg-primary text-white',
      secondary: 'bg-background-primary text-white border border-white hover:bg-white hover:text-background-primary'
    }
  }
})
```

## 5.2 `NavBar`

Arquivo: `components/navbar/index.tsx`

#### Características

- header fixo com fundo translúcido e blur;
- navegação por seções por scroll;
- botão de troca de língua (`pt` / `en`);
- menu mobile com overlay em tela cheia.

#### Direção visual

- manter um header com borda sutil e sem quebrar o foco da identidade dark;
- usar um estado visual ativo para a seção atual (`activeSection`);
- sempre preservar o contraste para textos e ícones.

## 5.3 `Hero`

Arquivo: `components/hero/index.tsx`

#### Estrutura

- imagem em destaque para a identidade pessoal;
- produto de texto principal, com nome e forte destaque em azul;
- CTA com botão de mentoring e botão de download do CV.

#### Visual

- texto grande e centralizado em mobile;
- alinhamento lateral em desktop;
- uso de imagens de personagem e identidade visual do autor.

## 5.4 `AboutMe`

Arquivo: `components/aboutMe/index.tsx`

#### Estrutura

- seção com texto em duas colunas em desktop;
- imagem de perfil ou ilustração;
- ícones de redes sociais ao final do texto.

#### Direção visual

- bloco de texto limpo e legível;
- contraste claro entre fundo escuro e texto branco;
- a imagem atua como suporte visual, sem competir com a leitura do texto.

## 5.5 `Card`

Arquivo: `components/card/index.tsx`

#### Abordagem

- container de experiência/educação em bloco sobre fundo mais escuro;
- ícone em caixa de superfície média;
- título principal sem destaque estridente;
- lista com bullets ou descrição textual.

#### Direção visual

- manter consistência de espaçamento interno;
- evitar over-design em cards de timeline;
- priorizar legibilidade e clareza de informação.

## 5.6 `Projects`

Arquivo: `components/projects/index.tsx`

#### Carrossel

- o sistema usa `swiper` para montar uma linha de projetos;
- cards com miniaturas e overlay ao hover;
- descrição, tecnologias e ação de destino são mostrados em camadas.

#### Direção visual

- o overlay em hover deve aumentar o contraste sem impedir a leitura;
- imagens continuam sendo a principal identidade do projeto;
- tags tecnológicas ajudam na rápida leitura das stacks dos projetos.

## 5.7 `Footer`

Arquivo: `components/footer/index.tsx`

#### Estrutura

- marca institucional;
- frase motivacional;
- lista de redes sociais;
- informações de copyright e créditos.

#### Direção visual

- fundo ligeiramente mais claro que o base para separar a área final da página;
- textos menores e secundários para manter o footer em tom complementar.

## 6. Hierarquia visual

A interface atual se organiza em uma sequência simples e eficaz:

1. navegação fixa;
2. hero com apresentação central;
3. seção de sobre; 
4. carreira/educação;
5. projetos;
6. rodapé.

A profundidade visual é mantida por:

- fundos em variações de escuro;
- linhas sutis em bordas e cards;
- contraste de textos e blocos;
- hover leve em elementos interativos.

## 7. Comportamento e motion

O projeto utiliza duas formas principais de dinâmica:

- `AOS` para revelar conteúdo ao scroll;
- `Swiper` para carrossel de projetos.

### Padrões recomendados

- manter movimento discreto e funcional;
- não criar animações que confundam a leitura de conteúdo técnico;
- preservar acessibilidade para quem preferir menos movimento.

## 8. Acessibilidade

Mesmo sendo um portfólio visual, a acessibilidade precisa ser tratada com cuidado.

### Padrões já observados

- `alt` em imagens;
- uso de textos visíveis e sem dependência de apenas ícones;
- interações com bom contraste;
- navegação por seção com `id` e `scroll-margin-top`.

### Regras futuras

- garantir foco visível em todos os estados interativos;
- preferir `button` ou `a` em vez de `div` clicável;
- manter todos os textos em contraste adequado sobre fundos escuros;
- testar o comportamento em mobile e desktop.

## 9. Boas práticas de extensão

Ao adicionar novas telas ou componentes ao design system, siga estas regras:

- reutilizar os tokens de cor e tamanho já existentes;
- usar `background-*` e `text-*` em vez de criar valores arbitrários;
- manter o sistema dark-first;
- desenvolver blocos que sigam a linguagem do portfolio e não o estilo de uma landing page genérica;
- priorizar leitura e clareza sobre efeitos visuais excessivos.

## 10. Resumo

O design system do portfólio é baseado em:

- tema escuro profissional;
- azul como acento principal;
- tipografia clara e moderna;
- cards simples e funcionalmente estruturados;
- navegação por seções com foco em valor de conteúdo.

A interface atual já tem uma identidade forte e bem definida para um portfolio pessoal de tecnologia. A manutenção deve seguir este mesmo princípio: funcional, elegante, legível e consistente.
