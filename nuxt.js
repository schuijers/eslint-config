module.exports = {
  extends: ['./vue.js'],
  plugins: ['nuxt'],
  rules: {
    /**
     * Disallow `require/modules.exports/exports` in `nuxt.config.js`.
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-cjs-in-config.md
     */
    'nuxt/no-cjs-in-config': 'error',

    /**
     * Disallow `context.isServer/context.isClient` in `asyncData/fetch/nuxtServerInit`.
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-env-in-context.md
     */
    'nuxt/no-env-in-context': 'error',

    /**
     * Disallow `process.server/process.client` in client only Vue lifecycle hooks like: `mounted, beforeMount, updated`...
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-env-in-hooks.md
     */
    'nuxt/no-env-in-hooks': 'error',

    /**
     * Disallow `window/document` in `created/beforeCreate`.
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-globals-in-created.md
     */
    'nuxt/no-globals-in-created': 'error',

    /**
     * Disallow `this` in `asyncData/fetch`.
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-this-in-fetch-data.md
     */
    'nuxt/no-this-in-fetch-data': 'error',

    /**
     * Disallow `setTimeout/setInterval` in `asyncData/fetch`.
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/no-timing-in-fetch-data.md
     */
    'nuxt/no-timing-in-fetch-data': 'error',

    /**
     * Enforce `head` property in component to be a function.
     * https://github.com/nuxt/eslint-plugin-nuxt/blob/master/docs/rules/require-func-head.md
     */
    'nuxt/require-func-head': 'off',
  },
}
