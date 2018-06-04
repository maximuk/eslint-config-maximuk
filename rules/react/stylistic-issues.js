module.exports = {
  rules: {

    /*
     * Enforces consistent naming for boolean props
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md
     */
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      },
    ],

    /*
     * Enforce consistent usage of destructuring assignment of props, state, and context
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
     */
    'react/destructuring-assignment': 'off',

    /*
     * Enforce boolean attributes notation in JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-boolean-value.md
     */
    'react/jsx-boolean-value': [
      'error',
      'never',
    ],

    /*
     * Ensures inline tags are not rendered without spaces between them
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-child-element-spacing.md
     */
    'react/jsx-child-element-spacing': 'warn',

    /*
     * Validate closing bracket location in JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-closing-bracket-location.md
     */
    'react/jsx-closing-bracket-location': [
      'error',
      'tag-aligned',
    ],

    /*
     * Validate closing tag location for multiline JSX
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-closing-tag-location.md
     */
    'react/jsx-closing-tag-location': 'error',

    /*
     * Enforce or disallow spaces inside of curly braces in JSX attributes
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-spacing.md
     */
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'never',
      },
    ],

    /*
     * Disallow or enforce spaces around equal signs in JSX attributes
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-equals-spacing.md
     */
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],

    /*
     * Restrict file extensions that may contain JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': 'off',

    /*
     * Ensure proper position of the first property in JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-first-prop-new-line.md
     */
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline',
    ],

    /*
     * Enforce event handler naming conventions in JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-handler-names.md
     */
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],

    /*
     * Validate JSX indentation
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent.md
     */
    'react/jsx-indent': [
      'error',
      2,
    ],

    /*
     * Validate props indentation in JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-indent-props.md
     */
    'react/jsx-indent-props': [
      'error',
      2,
    ],

    /*
     * Validate JSX maximum depth
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-depth.md
     */
    'react/jsx-max-depth': [
      'error',
      {
        max: 4,
      },
    ],

    /*
     * Limit maximum of props on a single line in JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-max-props-per-line.md
     */
    'react/jsx-max-props-per-line': [
      'error',
      {
        when: 'multiline',
        maximum: 1,
      },
    ],

    /*
     * Prevent using string literals in React component definition
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-literals.md
     */
    'react/jsx-no-literals': 'off',

    /*
     * Limit to one expression per line in JSX
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-one-expression-per-line.md
     */
    'react/jsx-one-expression-per-line': 'error',

    /*
     * Disallow unnecessary JSX expressions when literals alone are sufficient or enfore JSX expressions on literals in JSX children or attributes
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-curly-brace-presence.md
     */
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'ignore',
      },
    ],

    /*
     * Enforce PascalCase for user-defined JSX components
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-pascal-case.md
     */
    'react/jsx-pascal-case': 'error',

    /*
     * Disallow multiple spaces between inline JSX props
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-props-no-multi-spaces.md
     */
    'react/jsx-props-no-multi-spaces': 'error',

    /*
     * Enforce default props alphabetical sorting
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-default-props.md
     */
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],

    /*
     * Enforce props alphabetical sorting
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-sort-props.md
     */
    'react/jsx-sort-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],

    /*
     * Validate whitespace in and around the JSX opening and closing brackets
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-tag-spacing.md
     */
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],

    /*
     * Prevent missing parentheses around multilines JSX
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-wrap-multilines.md
     */
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens',
        logical: 'parens',
        prop: 'parens',
      },
    ],

    /*
     * Prevent multiple component definition per file
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-multi-comp.md
     */
    'react/no-multi-comp': [
      'error',
      {
        ignoreStateless: true,
      },
    ],

    /*
     * Prevent usage of setState
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-set-state.md
     */
    'react/no-set-state': 'off',

    /*
     * Prevent common typos
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-typos.md
     */
    'react/no-typos': 'error',

    /*
     * Enforce ES5 or ES6 class for React Components
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-es6-class.md
     */
    'react/prefer-es6-class': 'error',

    /*
     * Enforce stateless components to be written as a pure function
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prefer-stateless-function.md
     */
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],

    /*
     * Prevent extra closing tags for components without children
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/self-closing-comp.md
     */
    'react/self-closing-comp': 'error',

    /*
     * Enforce component methods order
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-comp.md
     */
    'react/sort-comp': [
      'error',
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
      },
    ],

    /*
     * Enforce propTypes declarations alphabetical sorting
     * 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/sort-prop-types.md
     */
    'react/sort-prop-types': [
      'error',
      {
        ignoreCase: true,
        sortShapeProp: true,
      },
    ],
  },
};
