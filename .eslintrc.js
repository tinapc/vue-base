module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'comma-dangle': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'linebreak-style': 'off',
    indent: 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'max-len': ['error', { code: 150, ignoreStrings: true }],
    'space-before-function-paren': 'off',
    quotes: 'off',
  },
};
