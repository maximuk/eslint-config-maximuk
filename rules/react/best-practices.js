module.exports = {
  rules: {

    /*
     * 🔧 Enforce all defaultProps are defined and not "required" in propTypes.
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/default-props-match-prop-types.md
     */
    'react/default-props-match-prop-types': 'error',

    /*
     * 🔧 Prevent missing displayName in a React component definition
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
     */
    'react/display-name': 'error',

    /*
     * 🔧 Forbid certain props on components
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-component-props.md
     */
    'react/forbid-component-props': 'off',

    /*
     * 🔧 Forbid certain props on DOM Nodes
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-dom-props.md
     */
    'react/forbid-dom-props': 'off',

    /*
     * 🔧 Forbid certain elements
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-elements.md
     */
    'react/forbid-elements': 'off',

    /*
     * Forbid using another component's propTypes
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-foreign-prop-types.md
     */
    'react/forbid-foreign-prop-types': 'off',

    /*
     * 🔧 Forbid certain propTypes
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/forbid-prop-types.md
     */
    'react/forbid-prop-types': 'off',

    /*
     * 🔧 Prevents usage of Function.prototype.bind and arrow functions in React component props
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-bind.md
     */
    'react/jsx-no-bind': 'error',

    /*
     * Forbid target="_blank" attribute without rel="noopener noreferrer"
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md
     */
    'react/jsx-no-target-blank': 'error',

    /*
     * Prevent React to be marked as unused
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
     */
    'react/jsx-uses-react': 'error',

    /*
     * Prevent variables used in JSX to be marked as unused
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md
     */
    'react/jsx-uses-vars': 'error',

    /*
     * Prevent usage of Array index in keys
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'error',

    /*
     * Prevent passing of children as props.
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md
     */
    'react/no-children-prop': 'error',

    /*
     * Prevent usage of dangerous JSX props
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger.md
     */
    'react/no-danger': 'off',

    /*
     * Prevent usage of deprecated methods
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md
     */
    'react/no-deprecated': 'error',

    /*
     * 🔧 Prevent usage of setState in componentDidMount
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-mount-set-state.md
     */
    'react/no-did-mount-set-state': 'off',

    /*
     * 🔧 Prevent usage of setState in componentDidUpdate
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-did-update-set-state.md
     */
    'react/no-did-update-set-state': 'off',

    /*
     * Prevent usage of findDOMNode
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md
     */
    'react/no-find-dom-node': 'error',

    /*
     * Prevent usage of isMounted
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-is-mounted.md
     */
    'react/no-is-mounted': 'error',

    /*
     * Prevent string definitions for references and prevent referencing this.refs
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md
     */
    'react/no-string-refs': 'error',

    /*
     * Prevent usage of the return value of React.render
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md
     */
    'react/no-render-return-value': 'error',

    /*
     * 🔧 Prevent definitions of unused prop types
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'error',

    /*
     * Prevent definition of unused state fields
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-unused-state.md
     */
    'react/no-unused-state': 'error',

    /*
     * 🔧 Prevent usage of setState in componentWillUpdate
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-will-update-set-state.md
     */
    'react/no-will-update-set-state': 'off',

    /*
     * 🔧 Prevent missing props validation in a React component definition
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
     */
    'react/prop-types': 'error',

    /*
     * 🔧 Enforce a defaultProps definition for every prop that is not a required prop.
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-default-props.md
     */
    'react/require-default-props': 'error',

    /*
     * 🔧 Enforce React components to have a shouldComponentUpdate method
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/require-optimization.md
     */
    'react/require-optimization': 'off',

    /*
     * Prevent passing of children to void DOM elements (e.g. <br />).
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/void-dom-elements-no-children.md
     */
    'react/void-dom-elements-no-children': 'error',
  },
};
