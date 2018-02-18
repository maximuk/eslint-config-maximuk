module.exports = {
  rules: {

    /*
     * Report when a DOM element is using both children and dangerouslySetInnerHTML
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md
     */
    'react/no-danger-with-children': 'error',

    /*
     * Enforce style prop value is an object
     * https://github.com/yannickcr/eslint-plugin-react/blob/HEAD/docs/rules/style-prop-object.md
     */
    'react/style-prop-object': 'off',
  },
};
