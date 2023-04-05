module.exports = {
  env: {
    'cypress/globals': true,
  },
  plugins: ['cypress'],
  rules: {
    /**
     * Ensure screenshots are preceded by an assertion.
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/assertion-before-screenshot.md
     */
    'cypress/assertion-before-screenshot': 'warn',

    /**
     * Prevent assigning return values of cy calls.
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-assigning-return-values.md
     */
    'cypress/no-assigning-return-values': 'error',

    /**
     * Prevent using async/await in Cypress test case.
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-async-tests.md
     */
    'cypress/no-async-tests': 'error',

    /**
     * Disallow using `force: true` with action commands.
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-force.md
     */
    'cypress/no-force': 'warn',

    /**
     * Disallow `cy.pause()` parent command.
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-pause.md
     */
    'cypress/no-pause': 'error',

    /**
     * Prevent waiting for arbitrary time periods
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/no-unnecessary-waiting.md
     */
    'cypress/no-unnecessary-waiting': 'error',

    /**
     * Only allow `data-*` attribute selectors (require-data-selectors).
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/require-data-selectors.md
     */
    'cypress/require-data-selectors': 'off',

    /**
     * Prevent chaining from unsafe to chain commands.
     * https://github.com/cypress-io/eslint-plugin-cypress/blob/master/docs/rules/unsafe-to-chain-command.md
     */
    'cypress/unsafe-to-chain-command': 'error',
  },
}
