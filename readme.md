# Portfólio Alvarenga Dev

Bem-vindo ao projeto do portfólio do Alvarenga Dev. Este documento fornece as instruções necessárias para configurar e executar o projeto.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Next.js**: Framework React para produção e escalabilidade.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de utilitários para estilização rápida e responsiva.
- **next-intl (i18n)**: Gerenciamento de internacionalização e suporte a múltiplos idiomas.

## Requisitos

Certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina antes de começar:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes que vem com o Node.js)

## Passos para Configuração

1. **Clone o repositório**:
   ```bash
   git clone <URL-DO-REPOSITORIO>
   cd <NOME-DO-DIRETORIO-CLONADO>
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   ```

   O projeto será iniciado em modo de desenvolvimento e estará acessível no endereço [http://localhost:3000](http://localhost:3000).

## Multilanguage (i18n)

O projeto utiliza um fluxo de multilanguage para suportar diferentes idiomas. As traduções estão localizadas na pasta `content`, na raiz do projeto. Atualmente, estão disponíveis os seguintes arquivos:

- `en.json`: Contém as traduções para o inglês.
- `pt.json`: Contém as traduções para o português.

As traduções funcionam como um dicionário para a aplicação. Para criar uma nova tradução, siga o padrão de JSON, onde as chaves devem ser consistentes entre os idiomas. Exemplo:

```json
"hero": {
    "saudation": "Hi, I'm",
    "saudation2": "and I craft beautiful & optimized apps.",
    "description": "I'm Mobile developer, Speaker and Content creator at",
    "mentoringButton": "Enter my mentoring",
    "cvButton": "Download my CV"
  }
```

Para exibir a tradução na aplicação, é necessário realizar o import da função `useTranslations` do `next-intl` e informar inicialmente a chave-mestre de qual tradução você deseja obter o dicionário. Exemplo:

```javascript
import { useTranslations } from 'next-intl';

const Example = () => {
    const t = useTranslations('about');

    return (
        <div>{t('title')}</div>
    );
};
```

O código acima seria o mesmo que dizer que você está querendo acessar a chave `title` dentro de um objeto, ou seja, `about.title`.

## Cuidados com Traduções

- **Não utilize listas/arrays**: O i18n não permite o uso de arrays. Caso seja necessário criar uma estrutura de lista, utilize uma cadeia de objetos. Exemplo:

```json
"experience1": {
    "title": "Android Developer",
    "list": "Modularization and of the MVVM architecture | Android Jetpack libraries | Detekt | AWS | Jira | Accessibility",
    "local": "Itaú (@BRQ)",
    "icon": "/itau.svg",
    "startAt": "Dec 2023",
    "endAt": "Currently"
  },
  "experience2": {
    "title": "Mid-Level Android Engineer",
    "list": "Modularization and of the MVVM architecture | Creation of tests with JUnit 5 and MockK | Android Jetpack libs | Participating in Design/Discovery processes | Integration with RESTful APIs | Detekt",
    "local": "Bornlogic",
    "icon": "/bornlogic.svg",
    "startAt": "Jul 2022",
    "endAt": "May 2023"
  }
```

Certifique-se de que as chaves sejam consistentes e utilizem boas práticas de nomeação.

## Estrutura de Exibição do Conteúdo

A aplicação está dividida em componentes, onde cada seção da página equivale a um novo componente. Alguns componentes exigem uma grande quantidade de dados para a exibição do conteúdo, como `career`, `projects` e `navbar`. Dentro de cada um deles, existe um objeto/array responsável por fazer todo o agrupamento das informações para que as mesmas sejam exibidas de maneira mais performática e simples. Caso queira modificar algo, não esqueça de alterar a estrutura e a respectiva tradução.

Exemplo de componente:

```javascript
const NavBar = () => {
    const menuLinks = [
        { name: t('home'), href: 'home' },
        { name: t('about'), href: 'about' },
        { name: t('career'), href: 'career' },
        { name: t('projects'), href: 'projects' }
    ];

    return (
        <nav>
            {menuLinks.map((item) => (
                <p key={item.name}>{item.name}</p>
            ))}
        </nav>
    );
};
```

Certifique-se de que a lógica do componente seja consistente com a tradução para evitar erros na exibição.

## Estrutura de Arquivos

- Todos os arquivos de imagens, ícones e outros recursos devem ser armazenados na pasta `public`, localizada na raiz do projeto.
- As imagens utilizadas no projeto devem ser salvas em `public/images`.
- Existe um botão responsável por realizar o download do currículo, que está localizado em `public` e nomeado como `cv.pdf`. Sinta-se livre para modificar o conteúdo do arquivo, apenas lembre-se de manter o mesmo nome e o mesmo local (`/public`).



