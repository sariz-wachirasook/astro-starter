# Astro Starter Kit

This is a clean Astro for outsourcify, with TailwindCSS and SCSS support.

## Before you start (อ่านก่อน)

- please learn the Astro project structure: https://docs.astro.build/en/core-concepts/project-structure/
- assets folder is for our Outsourcify developer experience, they will know why it's there
- assets folder can be removed if you don't need it
- i18n is a little bit complex, see https://github.com/yassinedoghri/astro-i18next for more information
- I already setup EN|TH|FR for example, EN will be the default language & path, while other paths will be generate when build, {env}/fr {env}/th

## Requirements

- NodeJS v16 only, with Yarn
- VSCode with extensions
- Git

## Extensions

- Astro: https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
- Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- Tailwind CSS IntelliSense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

## Scripts

```json
{
  "dev": "astro dev",
  "start": "astro dev",
  "build": "npx astro-i18next generate && astro build",
  "preview": "astro preview",
  "astro": "astro",
  "generate:locale": "astro-i18next generate"
}
```

- `yarn dev` to start a development server
- `yarn build` to build your project, it will generate the locales
- `yarn preview` to preview your build
- `yarn astro` to run astro commands
- `yarn generate:locale` to generate the locales
