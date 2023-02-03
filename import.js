module.exports = {
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import'],
  settings: {
    'import/ignore': ['node_modules', '.json$', '.(scss|less|css|styl)$'],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    /**
     * Enforce or ban the use of inline type-only markers for named imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
     */
    'import/consistent-type-specifier-style': 'off',

    /**
     * Ensure a default export is present, given a default import.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
     */
    'import/default': 'error',

    /**
     * Enforce a leading comment with the webpackChunkName for dynamic imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
     */
    'import/dynamic-import-chunkname': 'off',

    /**
     * Report any invalid exports, i.e. re-export of the same name.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
     */
    'import/export': 'error',

    /**
     * Ensure all exports appear after other statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
     */
    'import/exports-last': 'warn',

    /**
     * Ensure consistent use of file extension within the import path.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
     */
    'import/extensions': 'off',

    /**
     * Ensure all imports appear before other statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
     */
    'import/first': 'error',

    /**
     * Prefer named exports to be grouped together in a single export declaration.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
     */
    'import/group-exports': 'off',

    /**
     * Limit the maximum number of dependencies a module can have.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
     */
    'import/max-dependencies': 'off',

    /**
     * Ensure named imports correspond to a named export in the remote file.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
     */
    'import/named': 'error',

    /**
     * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import/namespace': 'error',

    /**
     * Enforce a newline after import statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': 'off',

    /**
     * Forbid import of modules using absolute paths.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
     */
    'import/no-absolute-path': 'error',

    /**
     * Report AMD `require` and `define` calls.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
     */
    'import/no-amd': 'error',

    /**
     * Forbid anonymous values as default exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
     */
    'import/no-anonymous-default-export': 'off',

    /**
     * Report CommonJS require calls and `module.exports` or `exports.*`.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
     */
    'import/no-commonjs': 'off',

    /**
     * Forbid a module from importing a module with a dependency path back to itself.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
     */
    'import/no-cycle': 'off', // this rule is slow

    /**
     * Forbid default exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
     */
    'import/no-default-export': 'off',

    /**
     * Report imported names marked with `@deprecated` documentation tag.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
     */
    'import/no-deprecated': 'warn',

    /**
     * Report repeated import of the same module in multiple places.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
     */
    'import/no-duplicates': 'error',

    /**
     * Forbid `require()` calls with expressions.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
     */
    'import/no-dynamic-require': 'warn',

    /**
     * Forbid empty named import blocks.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
     */
    'import/no-empty-named-blocks': 'error',

    /**
     * Forbid the use of extraneous packages.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': 'error',

    /**
     * Forbid imports with CommonJS exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
     */
    'import/no-import-module-exports': 'error',

    /**
     * Prevent importing the submodules of other modules.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
     */
    'import/no-internal-modules': 'off',

    /**
     * Forbid the use of mutable exports with `var` or `let`.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
     */
    'import/no-mutable-exports': 'error',

    /**
     * Report use of exported name as identifier of default export.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
     */
    'import/no-named-as-default': 'error',

    /**
     * Report use of exported name as property of default export.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'error',

    /**
     * Forbid named default exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
     */
    'import/no-named-default': 'error',

    /**
     * Forbid named exports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
     */
    'import/no-named-export': 'off',

    /**
     * Forbid namespace (a.k.a. "wildcard" `*`) imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
     */
    'import/no-namespace': 'off',

    /**
     * No Node.js builtin modules.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
     */
    'import/no-nodejs-modules': 'off',

    /**
     * Prevent importing packages through relative paths.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
     */
    'import/no-relative-packages': 'warn',

    /**
     * Forbid importing modules from parent directories.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
     */
    'import/no-relative-parent-imports': 'off',

    /**
     * Restrict which files can be imported in a given folder.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
     */
    'import/no-restricted-paths': 'off',

    /**
     * Forbid a module from importing itself.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
     */
    'import/no-self-import': 'error',

    /**
     * Forbid unassigned imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
     */
    'import/no-unassigned-import': 'off',

    /**
     * Ensure imports point to a file/module that can be resolved.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'error',

    /**
     * Report modules without exports, or exports without matching import in another module.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
     */
    'import/no-unused-modules': 'off',

    /**
     * Prevent unnecessary path segments in import and require statements.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
     */
    'import/no-useless-path-segments': 'warn',

    /**
     * Forbid webpack loader syntax in imports.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
     */
    'import/no-webpack-loader-syntax': 'error',

    /**
     * Enforce a convention in module import order.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
     */
    'import/order': [
      'warn',
      {
        groups: ['builtin', ['external', 'internal'], 'parent', ['sibling', 'index']],
      },
    ],

    /**
     * Prefer a default export if module exports a single name.
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
     */
    'import/prefer-default-export': 'off',

    /**
     * Report potentially ambiguous parse goal (`script` vs. `module`).
     * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
     */
    'import/unambiguous': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: 'plugin:import/typescript',
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'import/no-unresolved': 'off', // TS2307
      },
    },
  ],
}
