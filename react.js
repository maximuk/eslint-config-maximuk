module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './rules/react/stylistic-issues.js',
    './rules/react/best-practices.js',
    './rules/react/possible-errors.js',
    './rules/react/other.js',
  ],
};
