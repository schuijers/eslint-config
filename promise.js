module.exports = {
  env: {
    es6: true,
  },
  plugins: ['promise'],
  rules: {
    /**
     * Return inside each `then()` to create readable and reusable Promise chains.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/always-return.md
     */
    'promise/always-return': 'error',

    /**
     * Avoid creating `new` promises outside of utility libs (use pify instead)
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/avoid-new.md
     */
    'promise/avoid-new': 'warn',

    /**
     * Enforces the use of `catch()` on un-returned promises.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/catch-or-return.md
     */
    'promise/catch-or-return': 'error',

    /**
     * Avoid calling `cb()` inside of a `then()` (use nodeify instead).
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-callback-in-promise.md
     */
    'promise/no-callback-in-promise': 'warn',

    /**
     * Disallow creating new promises with paths that resolve multiple times.
     * https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md
     */
    'promise/no-multiple-resolved': 'error',

    /**
     * In an ES5 environment, make sure to create a `Promise` constructor before using.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-native.md
     */
    'promise/no-native': 'off',

    /**
     * Avoid nested `then()` or `catch()` statements.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-nesting.md
     */
    'promise/no-nesting': 'warn',

    /**
     * Avoid calling `new` on a Promise static method.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-new-statics.md
     */
    'promise/no-new-statics': 'error',

    /**
     * Avoid using promises inside of callbacks.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-promise-in-callback.md
     */
    'promise/no-promise-in-callback': 'warn',

    /**
     * Disallow return statements in `finally()`.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-return-in-finally.md
     */
    'promise/no-return-in-finally': 'warn',

    /**
     * Avoid wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/no-return-wrap.md
     */
    'promise/no-return-wrap': 'error',

    /**
     * Enforce consistent param names and ordering when creating new promises.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/param-names.md
     */
    'promise/param-names': 'error',

    /**
     * Prefer async/await to the callback pattern.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-callbacks.md
     */
    'promise/prefer-await-to-callbacks': 'off',

    /**
     * Prefer await to `then()`/`catch()`/`finally()` for reading Promise values.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/prefer-await-to-then.md
     */
    'promise/prefer-await-to-then': 'off',

    /**
     * Ensures the proper number of arguments are passed to Promise functions.
     * https://github.com/xjamundx/eslint-plugin-promise/blob/development/docs/rules/valid-params.md
     */
    'promise/valid-params': 'warn',
  },
}
