module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['./rules/jsx-a11y/other.js'],
  plugins: ['jsx-a11y'],
};
