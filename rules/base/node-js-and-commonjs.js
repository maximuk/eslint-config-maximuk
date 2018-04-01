module.exports = {
  rules: {

    /*
     * require `return` statements after callbacks
     * 🔧 https://eslint.org/docs/rules/callback-return
     */
    'callback-return': 'off',

    /*
     * require `require()` calls to be placed at top-level module scope
     * https://eslint.org/docs/rules/global-require
     */
    'global-require': 'off',

    /*
     * require error handling in callbacks
     * 🔧 https://eslint.org/docs/rules/handle-callback-err
     */
    'handle-callback-err': 'off',

    /*
     * disallow use of the `Buffer()` constructor
     * https://eslint.org/docs/rules/no-buffer-constructor
     */
    'no-buffer-constructor': 'off',

    /*
     * disallow `require` calls to be mixed with regular variable declarations
     * 🔧 https://eslint.org/docs/rules/no-mixed-requires
     */
    'no-mixed-requires': 'off',

    /*
     * disallow `new` operators with calls to `require`
     * https://eslint.org/docs/rules/no-new-require
     */
    'no-new-require': 'off',

    /*
     * disallow string concatenation with `__dirname` and `__filename`
     * https://eslint.org/docs/rules/no-path-concat
     */
    'no-path-concat': 'error',

    /*
     * disallow the use of `process.env`
     * https://eslint.org/docs/rules/no-process-env
     */
    'no-process-env': 'off',

    /*
     * disallow the use of `process.exit()`
     * https://eslint.org/docs/rules/no-process-exit
     */
    'no-process-exit': 'off',

    /*
     * disallow specified modules when loaded by `require`
     * 🔧 https://eslint.org/docs/rules/no-restricted-modules
     */
    'no-restricted-modules': 'off',

    /*
     * disallow synchronous methods
     * 🔧 https://eslint.org/docs/rules/no-sync
     */
    'no-sync': 'off',
  },
};
