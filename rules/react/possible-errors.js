module.exports = {
  rules: {

    // Forbid "button" element without an explicit "type" attribute
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md
    'react/button-has-type': 'off',

    // Report missing `key` props in iterators/collection literals
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Comments inside children section of tag should be placed inside braces
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // Enforce no duplicate props
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': 'error',

    // Disallow undeclared variables in JSX
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Reports when this.state is accessed within setState
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-access-state-in-setstate.md
    'react/no-access-state-in-setstate': 'error',

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Flag shouldComponentUpdate when extending PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-redundant-should-component-update.md
    'react/no-redundant-should-component-update': 'error',

    // Report "this" being used in stateless components
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-this-in-sfc.md
    'react/no-this-in-sfc': 'error',

    // Detect unescaped HTML entities, which might represent malformed tags
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // Prevent usage of unknown DOM property
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Enforce ES5 or ES6 class for returning value in render function
    // 🔧 https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md
    'react/require-render-return': 'error',
  },
};
