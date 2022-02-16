module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        // Order: eslint, typescript-eslint, plugins, prettier
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // Order: eslint, typescript-eslint, plugins
    },
};
