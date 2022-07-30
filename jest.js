const fs = require('fs')
const findup = require('findup-sync')

let hasJestDom = false
let hasTestingLibrary = false
let hasUserEvent = false
let framework = null

try {
  const pkgFile = findup('package.json')

  if (pkgFile) {
    const pkg = JSON.parse(fs.readFileSync(pkgFile))

    const allDeps = Object.keys({
      ...pkg.peerDependencies,
      ...pkg.devDependencies,
      ...pkg.dependencies,
    })

    hasJestDom = allDeps.includes('@testing-library/jest-dom')

    hasTestingLibrary = [
      '@testing-library/angular',
      '@testing-library/dom',
      '@testing-library/react',
      '@testing-library/vue',
    ].some(dependency => allDeps.includes(dependency))

    hasUserEvent = allDeps.includes('@testing-library/user-event')

    if (allDeps.includes('@testing-library/vue')) {
      framework = 'vue'
    } else if (allDeps.includes('@testing-library/react')) {
      framework = 'react'
    } else if (allDeps.includes('@testing-library/angular')) {
      framework = 'angular'
    }
  }
} catch (error) {
  // ignore error
}

module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: [
    'jest',
    hasJestDom ? 'jest-dom' : null,
    hasTestingLibrary ? 'testing-library' : null,
  ].filter(Boolean),
  rules: {},
  overrides: [
    {
      files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
      rules: {
        /**
         * Have control over `test` and `it` usages.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/consistent-test-it.md
         */
        'jest/consistent-test-it': 'off',

        /**
         * Enforce assertion to be made in a test body.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/expect-expect.md
         */
        'jest/expect-expect': 'warn',

        /**
         * Enforces a maximum number assertion calls in a test body.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-expects.md
         */
        'jest/max-expects': 'warn',

        /**
         * Enforces a maximum depth to nested describe calls.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/max-nested-describe.md
         */
        'jest/max-nested-describe': 'error',

        /**
         * Disallow alias methods.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-alias-methods.md
         */
        'jest/no-alias-methods': 'warn',

        /**
         * Disallow commented out tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-commented-out-tests.md
         */
        'jest/no-commented-out-tests': 'warn',

        /**
         * Prevent calling `expect` conditionally.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-expect.md
         */
        'jest/no-conditional-expect': 'error',

        /**
         * Disallow conditional logic in tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-conditional-in-test.md
         */
        'jest/no-conditional-in-test': 'error',

        /**
         * Disallow use of deprecated functions.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-deprecated-functions.md
         */
        'jest/no-deprecated-functions': 'error',

        /**
         * Disallow disabled tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-disabled-tests.md
         */
        'jest/no-disabled-tests': 'warn',

        /**
         * Avoid using a callback in asynchronous tests and hooks.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-done-callback.md
         */
        'jest/no-done-callback': 'error',

        /**
         * Disallow duplicate setup and teardown hooks.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-duplicate-hooks.md
         */
        'jest/no-duplicate-hooks': 'off',

        /**
         * Disallow using `exports` in files containing tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-export.md
         */
        'jest/no-export': 'error',

        /**
         * Disallow focused tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-focused-tests.md
         */
        'jest/no-focused-tests': 'error',

        /**
         * Disallow setup and teardown hooks.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-hooks.md
         */
        'jest/no-hooks': 'off',

        /**
         * Disallow identical titles.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-identical-title.md
         */
        'jest/no-identical-title': 'error',

        /**
         * Disallow string interpolation inside snapshots.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-interpolation-in-snapshots.md
         */
        'jest/no-interpolation-in-snapshots': 'error',

        /**
         * Disallow Jasmine globals.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jasmine-globals.md
         */
        'jest/no-jasmine-globals': 'warn',

        /**
         * Disallow importing Jest.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-jest-import.md
         */
        'jest/no-jest-import': 'error',

        /**
         * Disallow large snapshots.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md
         */
        'jest/no-large-snapshots': [
          'warn',
          {
            maxSize: 300,
          },
        ],

        /**
         * Disallow manually importing from `__mocks__`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-mocks-import.md
         */
        'jest/no-mocks-import': 'error',

        /**
         * Disallow specific matchers & modifiers.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-restricted-matchers.md
         */
        'jest/no-restricted-matchers': 'off',

        /**
         * Disallow using `expect` outside of `it` or `test` blocks.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-standalone-expect.md
         */
        'jest/no-standalone-expect': 'error',

        /**
         * Use `.only` and `.skip` over `f` and `x`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-prefixes.md
         */
        'jest/no-test-prefixes': 'error',

        /**
         * Disallow explicitly returning from tests.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-test-return-statement.md
         */
        'jest/no-test-return-statement': 'warn',

        /**
         * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-called-with.md
         */
        'jest/prefer-called-with': 'error',

        /**
         * Suggest using the built-in comparison matchers.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-comparison-matcher.md
         */
        'jest/prefer-comparison-matcher': 'error',

        /**
         * Suggest using the built-in equality matchers.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-equality-matcher.md
         */
        'jest/prefer-equality-matcher': 'error',

        /**
         * Suggest using `expect.assertions()` OR `expect.hasAssertions()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-assertions.md
         */
        'jest/prefer-expect-assertions': 'off',

        /**
         * Prefer `await expect(...).resolves` over `expect(await ...)` syntax.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-expect-resolves.md
         */
        'jest/prefer-expect-resolves': 'off',

        /**
         * Prefer having hooks in a consistent order.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-in-order.md
         */
        'jest/prefer-hooks-in-order': 'error',

        /**
         * Suggest having hooks before any test cases.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-hooks-on-top.md
         */
        'jest/prefer-hooks-on-top': 'error',

        /**
         * Enforce lowercase test names.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-lowercase-title.md
         */
        'jest/prefer-lowercase-title': 'off',

        /**
         * Prefer mock resolved/rejected shorthands for promises.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-mock-promise-shorthand.md
         */
        'jest/prefer-mock-promise-shorthand': 'warn',

        /**
         * Prefer including a hint with external snapshots.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-snapshot-hint.md
         */
        'jest/prefer-snapshot-hint': 'off',

        /**
         * Suggest using `jest.spyOn()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-spy-on.md
         */
        'jest/prefer-spy-on': 'warn',

        /**
         * Suggest using `toStrictEqual()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-strict-equal.md
         */
        'jest/prefer-strict-equal': 'off',

        /**
         * Suggest using `toBe()` for primitive literals.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-be.md
         */
        'jest/prefer-to-be': 'error',

        /**
         * Suggest using `toContain()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-contain.md
         */
        'jest/prefer-to-contain': 'error',

        /**
         * Suggest using `toHaveLength()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-to-have-length.md
         */
        'jest/prefer-to-have-length': 'error',

        /**
         * Suggest using `test.todo`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/prefer-todo.md
         */
        'jest/prefer-todo': 'warn',

        /**
         * Require setup and teardown code to be within a hook.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-hook.md
         */
        'jest/require-hook': 'off',

        /**
         * Require a message for `toThrow()`.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-to-throw-message.md
         */
        'jest/require-to-throw-message': 'off',

        /**
         * Require test cases and hooks to be inside a `describe` block.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/require-top-level-describe.md
         */
        'jest/require-top-level-describe': 'off',

        /**
         * Enforces unbound methods are called with their expected scope.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
         */
        'jest/unbound-method': 'off',

        /**
         * Enforce valid `describe()` callback.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-describe-callback.md
         */
        'jest/valid-describe-callback': 'error',

        /**
         * Enforce valid `expect()` usage.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect.md
         */
        'jest/valid-expect': 'error',

        /**
         * Ensure promises that have expectations in their chain are valid.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-expect-in-promise.md
         */
        'jest/valid-expect-in-promise': 'error',

        /**
         * Enforce valid titles.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/valid-title.md
         */
        'jest/valid-title': 'warn',

        ...(hasJestDom
          ? {
              /**
               * prefer toBeChecked over checking attributes.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-checked.md
               */
              'jest-dom/prefer-checked': 'error',

              /**
               * Prefer toBeEmpty over checking innerHTML.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-empty.md
               */
              'jest-dom/prefer-empty': 'error',

              /**
               * prefer toBeDisabled or toBeEnabled over checking attributes.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-enabled-disabled.md
               */
              'jest-dom/prefer-enabled-disabled': 'error',

              /**
               * prefer toHaveFocus over checking document.activeElement.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-focus.md
               */
              'jest-dom/prefer-focus': 'error',

              /**
               * Prefer .toBeInTheDocument() for asserting the existence of a DOM node.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-in-document.md
               */
              'jest-dom/prefer-in-document': 'error',

              /**
               * prefer toBeRequired over checking properties.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-required.md
               */
              'jest-dom/prefer-required': 'error',

              /**
               * prefer toHaveAttribute over checking getAttribute/hasAttribute.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-attribute.md
               */
              'jest-dom/prefer-to-have-attribute': 'error',

              /**
               * prefer toHaveClass over checking element className.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-class.md
               */
              'jest-dom/prefer-to-have-class': 'error',

              /**
               * prefer toHaveStyle over checking element style.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-style.md
               */
              'jest-dom/prefer-to-have-style': 'error',

              /**
               * Prefer toHaveTextContent over checking element.textContent.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-text-content.md
               */
              'jest-dom/prefer-to-have-text-content': 'error',

              /**
               * prefer toHaveValue over checking element.value.
               * https://github.com/testing-library/eslint-plugin-jest-dom/blob/main/docs/rules/prefer-to-have-value.md
               */
              'jest-dom/prefer-to-have-value': 'error',
            }
          : null),

        ...(hasTestingLibrary
          ? {
              /**
               * Enforce promises from async queries to be handled.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-query.md
               */
              'testing-library/await-async-query': 'error',

              /**
               * Enforce promises from async utils to be awaited properly.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-async-utils.md
               */
              'testing-library/await-async-utils': 'error',

              /**
               * Enforce promises from `fireEvent` methods to be handled.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/await-fire-event.md
               */
              'testing-library/await-fire-event': framework === 'vue' ? 'error' : 'off',

              /**
               * Ensures consistent usage of `data-testid`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/consistent-data-testid.md
               */
              'testing-library/consistent-data-testid': 'off',

              /**
               * Disallow unnecessary `await` for sync events.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-events.md
               */
              'testing-library/no-await-sync-events': 'error',

              /**
               * Disallow unnecessary `await` for sync queries.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-await-sync-query.md
               */
              'testing-library/no-await-sync-query': 'error',

              /**
               * Disallow the use of `container` methods.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-container.md
               */
              'testing-library/no-container': 'error',

              /**
               * Disallow the use of debugging utilities like `debug`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-debugging-utils.md
               */
              'testing-library/no-debugging-utils': 'error',

              /**
               * Disallow importing from DOM Testing Library.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-dom-import.md
               */
              'testing-library/no-dom-import': framework ? ['error', framework] : 'off',

              /**
               * Disallow the use of the global RegExp flag (/g) in queries.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-global-regexp-flag-in-query.md
               */
              'testing-library/no-global-regexp-flag-in-query': 'error',

              /**
               * Disallow the use of `cleanup`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-manual-cleanup.md
               */
              'testing-library/no-manual-cleanup': 'error',

              /**
               * Disallow direct Node access.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-node-access.md
               */
              'testing-library/no-node-access': 'error',

              /**
               * Disallow the use of promises passed to a `fireEvent` method.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-promise-in-fire-event.md
               */
              'testing-library/no-promise-in-fire-event': 'error',

              /**
               * Disallow the use of `render` in testing frameworks setup functions.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-render-in-setup.md
               */
              'testing-library/no-render-in-setup': 'error',

              /**
               * Disallow wrapping Testing Library utils or empty callbacks in act.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-unnecessary-act.md
               */
              'testing-library/no-unnecessary-act': framework === 'react' ? 'error' : 'off',

              /**
               * Disallow empty callbacks for `waitFor` and `waitForElementToBeRemoved`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-empty-callback.md
               */
              'testing-library/no-wait-for-empty-callback': 'error',

              /**
               * Disallow the use of multiple expect calls inside `waitFor`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-multiple-assertions.md
               */
              'testing-library/no-wait-for-multiple-assertions': 'error',

              /**
               * Disallow the use of side effects in `waitFor`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-side-effects.md
               */
              'testing-library/no-wait-for-side-effects': 'error',

              /**
               * Ensures no snapshot is generated inside of a `waitFor` call.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/no-wait-for-snapshot.md
               */
              'testing-library/no-wait-for-snapshot': 'error',

              /**
               * Suggest using explicit assertions rather than standalone queries.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-explicit-assert.md
               */
              'testing-library/prefer-explicit-assert': 'warn',

              /**
               * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-find-by.md
               */
              'testing-library/prefer-find-by': 'error',

              /**
               * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-presence-queries.md
               */
              'testing-library/prefer-presence-queries': 'error',

              /**
               * Suggest using queryBy* queries when waiting for disappearance.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-query-by-disappearance.md
               */
              'testing-library/prefer-query-by-disappearance': 'error',

              /**
               * Suggest using `screen` while querying.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md
               */
              'testing-library/prefer-screen-queries': 'error',

              /**
               * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-user-event.md
               */
              'testing-library/prefer-user-event': hasUserEvent ? 'error' : 'off',

              /**
               * Use `waitFor` instead of deprecated wait methods.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-wait-for.md
               */
              'testing-library/prefer-wait-for': 'error',

              /**
               * Enforce a valid naming for return value from `render`.
               * https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/render-result-naming-convention.md
               */
              'testing-library/render-result-naming-convention': 'error',
            }
          : null),
      },
    },
    {
      files: ['**/__tests__/**/*.ts?(x)', '**/*.{spec,test}.ts?(x)'],
      rules: {
        /**
         * Disable rules for which an extension rule exists.
         */
        '@typescript-eslint/unbound-method': 'off',

        /**
         * Enforces unbound methods are called with their expected scope.
         * https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md
         */
        'jest/unbound-method': 'error',
      },
    },
  ],
}
