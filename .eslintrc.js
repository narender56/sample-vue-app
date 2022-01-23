module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'never'],
    'indent': ["error", 2, { "ignoredNodes": ["TemplateLiteral"] }],
    'dot-notation': 0,
    'eol-last': 'error',
    'camelcase': 0,
    'space-before-function-paren': 0,
    'vue/return-in-computed-property': 0,
    'vue/require-prop-type-constructor': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'none', 'ignoreRestSiblings': false }],
    'max-lines': ['error', 500]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
