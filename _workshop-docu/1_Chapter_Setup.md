[< README](../README.md)

## Setup project

We start with a [vite](https://vitejs.dev/) template suggested on https://www.solidjs.com/guides/getting-started:

```sh
npx degit solidjs/templates/ts pem-kanban
```

We go into the cloned project and install all dependencies:

```sh
cd pem-kanban
npm i
```

## Setup IDE

On VSCode

-   recommended to get extension "CSS Modules" from clinyong (clinyong.vscode-css-modules)

## (optional) We want it pretty

Believe me ... it's better for you and your team, if everyone is forced to write code with some sets of rules, you agreed on.

To use our company's setup (Pemedia), do following:

-   copy the following files here in your generated `/pem-kanban` folder:
    -   `.editorconfig` (for your IDE)
    -   `.prettierrc` (for Prettier)
    -   `.eslintrc.js` (for ESLint)
-   install these Plugins on VSCode:
    -   EditorConfig for VS Code _(from EditorConfig)_
    -   ESLint _(from Microsoft)_
    -   Prettier - Code formatter _(from Prettier)_
    -   optional: CSS Modules _(from clinyong)_
-   write in your `package.json` file in the `"scripts": {...}` block:
    -   `"format": "prettier -w ."`
    -   `"lint:check": "eslint '**/*.tsx'"`
-   format all files: (cd into pem-kanban) and run `npm run format`
-   install dependencies required in our ESLint config:
    `npm i -D eslint-config-prettier @typescript-eslint/eslint-plugin`

### (Bonus) Accessibilty ESLint Plugin

-   `npm i -D eslint-plugin-jsx-a11y`
-   write in your `.eslintrc.js` file in the `extends: [...]` block:
    -   `'plugin:jsx-a11y/recommended',`
-   more infos: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y

### Too lazy?

> jump to end: `git checkout chapter-setup`

[next >](2_Start.md)
