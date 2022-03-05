# @schuijers/eslint-config [![GitHub Build Status][shield-github-build-status]][shield-github-build-status] [![npm][shield-npm]][npm] [![MIT License][shield-license]][license]

My shareable ESLint configs.

## Installation

```shell script
npm install --save-dev @schuijers/eslint-config
```

or

```shell script
yarn add --dev @schuijers/eslint-config
```

This library has a required `peerDependencies` listing for [`eslint`](https://eslint.org).

## Usage

Reference `@schuijers/eslint-config` in your `.eslintrc.js`.

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: '@schuijers/eslint-config',
  rules: {
    // your overrides
  },
}
```

Or, you can use it in other ways as described in the
[official documentation](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files).

### Other configs

Besides the base config (for JavaScript and TypeScript) this package also exposes some additional configs:

| Config name | Description                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `promise`   | Additional rules for projects that use [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) |
| `vue`       | Additional rules for projects that use [Vue](https://vuejs.org/)                                                                            |
| `nuxt`      | Additional rules for projects that use [Nuxt](https://nuxtjs.org/) (this config extends the `vue` config above)                             |
| `jest`      | Additional rules for projects that use [Jest](https://jestjs.io/) (with or without the [Testing Library](https://testing-library.com/))     |
| `cypress`   | Additional rules for projects that use [Cypress](https://www.cypress.io/)                                                                   |

You can use them standalone:

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: '@schuijers/eslint-config/<config-name>',
}
```

Or in combination with the base config (recommended):

<!-- prettier-ignore -->
```javascript
module.exports = {
  extends: [
    '@schuijers/eslint-config',
    '@schuijers/eslint-config/<config-name>',
  ],
}
```

## Configuring aliases

When using aliases like `@` or `~` in your project, you might run into `import/no-unresolved` errors when using this
config. You can fix these errors by configuring the
[`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias) plugin (provided as a
dependency by this package) through your ESLint config.

For example:

<!-- prettier-ignore -->
```javascript
module.exports = {
  ...
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.ts'],
        map: [
          ['@', './src'],
          ['~', './src'],
        ],
      },
    },
  },
}
```

In this example, `@` and `~` will be mapped to the `/src` folder for `.js` and `.ts` and files.

## License

[MIT][license] &copy; [Martijn Schuijers][me]

[license]: ../../LICENSE
[me]: https://github.com/schuijers
[npm]: https://npmjs.org/package/@schuijers/eslint-config
[shield-github-build-status]: https://github.com/schuijers/eslint-config/workflows/Release/badge.svg
[shield-license]: https://img.shields.io/badge/License-MIT-lavender.svg
[shield-npm]: https://img.shields.io/npm/v/@schuijers/eslint-config.svg
