module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    './rules/base/best-practices.js',
    './rules/base/stylistic-issues.js',
    './rules/base/ecmascript-6.js',
    './rules/base/node-js-and-commonjs.js',
    './rules/base/possible-errors.js',
    './rules/base/variables.js',
    './rules/base/strict-mode.js',
  ],
};
