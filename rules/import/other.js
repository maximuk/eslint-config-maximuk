module.exports = {
  rules: {

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/named.md
    'import/named': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    'import/namespace': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-namespace.md
    'import/no-namespace': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/export.md
    'import/export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-mutable-exports.md
    'import/no-mutable-exports': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/extensions.md
    'import/extensions': [
      'error',
      'never',
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-restricted-paths.md
    'import/no-restricted-paths': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-internal-modules.md
    'import/no-internal-modules': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-default.md
    'import/no-named-default': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-anonymous-default-export.md
    'import/no-anonymous-default-export': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-commonjs.md
    'import/no-commonjs': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-amd.md
    'import/no-amd': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
    'import/no-duplicates': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/first.md
    'import/first': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/max-dependencies.md
    'import/max-dependencies': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-absolute-path.md
    'import/no-absolute-path': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-nodejs-modules.md
    'import/no-nodejs-modules': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-webpack-loader-syntax.md
    'import/no-webpack-loader-syntax': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/order.md
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
      },
    ],

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/newline-after-import.md
    'import/newline-after-import': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/unambiguous.md
    'import/unambiguous': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-unassigned-import.md
    'import/no-unassigned-import': 'off',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/exports-last.md
    'import/exports-last': 'error',

    // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/no-deprecated.md
    'import/no-deprecated': 'off',
  },
};
