module.exports = {
  rules: {

    /*
     * 🔧 enforce getter and setter pairs in objects
     * https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'off',

    /*
     * 🔧 enforce `return` statements in callbacks of array methods
     * https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': [
      'error',
      {
        allowImplicit: false,
      },
    ],

    /*
     * enforce the use of variables within the scope they are defined
     * https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'off',

    /*
     * 🔧 enforce that class methods utilize `this`
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',

    /*
     * 🔧 enforce a maximum cyclomatic complexity allowed in a program
     * https://eslint.org/docs/rules/complexity
     */
    complexity: [
      'error',
      20,
    ],

    /*
     * 🔧 require `return` statements to either always or never specify values
     * https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': [
      'error',
      {
        treatUndefinedAsUnspecified: true,
      },
    ],

    /*
     * 🔧 enforce consistent brace style for all control statements
     * https://eslint.org/docs/rules/curly
     */
    curly: [
      'error',
      'multi-or-nest',
      'consistent',
    ],

    /*
     * 🔧 require `default` cases in `switch` statements
     * https://eslint.org/docs/rules/default-case
     */
    'default-case': 'error',

    /*
     * 🔧 enforce consistent newlines before and after dots
     * https://eslint.org/docs/rules/dot-location
     */
    'dot-location': [
      'error',
      'property',
    ],

    /*
     * 🔧 enforce dot notation whenever possible
     * https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
      },
    ],

    /*
     * 🔧 require the use of `===` and `!==`
     * https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: [
      'error',
      'always',
    ],

    /*
     * require `for-in` loops to include an `if` statement
     * https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'off',

    /*
     * disallow the use of `alert`, `confirm`, and `prompt`
     * https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /*
     * disallow the use of `arguments.caller` or `arguments.callee`
     * https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',

    /*
     * disallow lexical declarations in case clauses
     * https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',

    /*
     * disallow division operators explicitly at the beginning of regular expressions
     * https://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'off',

    /*
     * 🔧 disallow `else` blocks after `return` statements in `if` statements
     * https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': [
      'error',
      {
        allowElseIf: true,
      },
    ],

    /*
     * 🔧 disallow empty functions
     * https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'error',

    /*
     * disallow empty destructuring patterns
     * https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /*
     * disallow `null` comparisons without type-checking operators
     * https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /*
     * 🔧 disallow the use of `eval()`
     * https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /*
     * 🔧 disallow extending native types
     * https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',

    /*
     * disallow unnecessary calls to `.bind()`
     * https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'error',

    /*
     * disallow unnecessary labels
     * https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'off',

    /*
     * 🔧 disallow fallthrough of `case` statements
     * https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /*
     * disallow leading or trailing decimal points in numeric literals
     * https://eslint.org/docs/rules/no-floating-decimal
     */
    'no-floating-decimal': 'error',

    /*
     * 🔧 disallow assignments to native objects or read-only global variables
     * https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /*
     * 🔧 disallow shorthand type conversions
     * https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'error',

    /*
     * disallow variable and `function` declarations in the global scope
     * https://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'off',

    /*
     * disallow the use of `eval()`-like methods
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /*
     * disallow `this` keywords outside of classes or class-like objects
     * https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'error',

    /*
     * disallow the use of the `__iterator__` property
     * https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',

    /*
     * 🔧 disallow labeled statements
     * https://eslint.org/docs/rules/no-labels
     */
    'no-labels': 'error',

    /*
     * disallow unnecessary nested blocks
     * https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',

    /*
     * disallow `function` declarations and expressions inside loop statements
     * https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'error',

    /*
     * 🔧 disallow magic numbers
     * https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': [
      'error',
      {
        ignore: [
          0,
          1,
        ],
        ignoreArrayIndexes: true,
        detectObjects: false,
      },
    ],

    /*
     * 🔧 disallow multiple spaces
     * https://eslint.org/docs/rules/no-multi-spaces
     */
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true,
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true,
        },
      },
    ],

    /*
     * disallow multiline strings
     * https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'error',

    /*
     * disallow `new` operators with the `Function` object
     * https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'off',

    /*
     * disallow `new` operators with the `String`, `Number`, and `Boolean` objects
     * https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /*
     * disallow `new` operators outside of assignments or comparisons
     * https://eslint.org/docs/rules/no-new
     */
    'no-new': 'error',

    /*
     * disallow octal escape sequences in string literals
     * https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'off',

    /*
     * disallow octal literals
     * https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /*
     * 🔧 disallow reassigning `function` parameters
     * https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['result'],
      },
    ],

    /*
     * disallow the use of the `__proto__` property
     * https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /*
     * 🔧 disallow variable redeclaration
     * https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /*
     * 🔧 disallow certain properties on certain objects
     * https://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /*
     * 🔧 disallow assignment operators in `return` statements
     * https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'off',

    /*
     * disallow unnecessary `return await`
     * https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'error',

    /*
     * disallow `javascript:` urls
     * https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',

    /*
     * 🔧 disallow assignments where both sides are exactly the same
     * https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],

    /*
     * disallow comparisons where both sides are exactly the same
     * https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /*
     * disallow comma operators
     * https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /*
     * disallow throwing literals as exceptions
     * https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'error',

    /*
     * disallow unmodified loop conditions
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'off',

    /*
     * 🔧 disallow unused expressions
     * https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'error',

    /*
     * disallow unused labels
     * https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /*
     * disallow unnecessary calls to `.call()` and `.apply()`
     * https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'error',

    /*
     * disallow unnecessary concatenation of literals or template literals
     * https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /*
     * disallow unnecessary escape characters
     * https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',

    /*
     * disallow redundant return statements
     * https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /*
     * disallow `void` operators
     * https://eslint.org/docs/rules/no-void
     */
    'no-void': 'error',

    /*
     * 🔧 disallow specified warning terms in comments
     * https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': 'off',

    /*
     * disallow `with` statements
     * https://eslint.org/docs/rules/no-with
     */
    'no-with': 'error',

    /*
     * 🔧 require using Error objects as Promise rejection reasons
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'off',

    /*
     * 🔧 enforce the consistent use of the radix argument when using `parseInt()`
     * https://eslint.org/docs/rules/radix
     */
    radix: [
      'error',
      'always',
    ],

    /*
     * disallow async functions which have no `await` expression
     * https://eslint.org/docs/rules/require-await
     */
    'require-await': 'error',

    /*
     * require `var` declarations be placed at the top of their containing scope
     * https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'off',

    /*
     * 🔧 require parentheses around immediate `function` invocations
     * https://eslint.org/docs/rules/wrap-iife
     */
    'wrap-iife': 'off',

    /*
     * 🔧 require or disallow "Yoda" conditions
     * https://eslint.org/docs/rules/yoda
     */
    yoda: 'off',
  },
};
