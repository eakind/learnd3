module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  globals: {
    ai: true,
    mc: true,
    d3: true
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': 'off', // process.env.NODE_ENV === 'production' ? 'error' :
    'no-debugger': 'off', // process.env.NODE_ENV === 'production' ? 'error' :
    'prefer-const': 'off',
    camelcase: 0,
    eqeqeq: 2,
    'no-dupe-args': 2,
    semi: [2, 'always'],
    'comma-dangle': 0,
    'no-return-assign': 'off',
    'no-prototype-builtins': 'off',
    "no-useless-escape": 0,
    quotes: [1, 'single']
  },
};
