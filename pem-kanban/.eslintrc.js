module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
        // Order: eslint, typescript-eslint, plugins, prettier
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    env: {
        // browser: true,
        // es6: true,
        // jest: true,
        // node: true,
    },
    rules: {
        // Order: eslint, typescript-eslint, plugins
    },
};
