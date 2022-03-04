const fs = require('fs')
const findup = require('findup-sync')
const semver = require('semver')

let vueVersion = 3

// determine the Vue version
try {
  const pkgFile = findup('package.json')

  if (pkgFile) {
    const pkg = JSON.parse(fs.readFileSync(pkgFile))

    const allDeps = {
      ...pkg.peerDependencies,
      ...pkg.devDependencies,
      ...pkg.dependencies,
    }

    const hasNuxt = allDeps.includes('nuxt')
    const hasNuxt3 = allDeps.includes('nuxt3')

    if (hasNuxt || hasNuxt3) {
      vueVersion = hasNuxt3 ? 3 : 2
    } else {
      vueVersion = (semver.coerce(allDeps.vue) || new semver.SemVer('3.0.0')).major
    }
  }
} catch (error) {
  // ignore error
}

// determine whether the TypeScript ESLint parser is installed
let hasTypeScriptParser = false

try {
  hasTypeScriptParser = !!require.resolve('@typescript-eslint/parser')
} catch (error) {
  // ignore error
}

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['vue'],
  rules: {
    /**
     * Enforce attribute naming style on custom components in template.
     * https://eslint.vuejs.org/rules/attribute-hyphenation.html
     */
    'vue/attribute-hyphenation': 'warn',

    /**
     * Enforce order of attributes.
     * https://eslint.vuejs.org/rules/attributes-order.html
     */
    'vue/attributes-order': 'warn',

    /**
     * Disallow use other than available `lang`.
     * https://eslint.vuejs.org/rules/block-lang.html
     */
    'vue/block-lang': 'off',

    /**
     * Enforce camelcase naming convention in `<template>`.
     * https://eslint.vuejs.org/rules/camelcase.html
     */
    'vue/camelcase': 'off',

    /**
     * Support comment-directives in `<template>`.
     * https://eslint.vuejs.org/rules/comment-directive.html
     */
    'vue/comment-directive': 'error',

    /**
     * Enforce component API style.
     * https://eslint.vuejs.org/rules/component-api-style.html
     */
    'vue/component-api-style': 'off',

    /**
     * Enforce specific casing for component definition name.
     * https://eslint.vuejs.org/rules/component-definition-name-casing.html
     */
    'vue/component-definition-name-casing': 'warn',

    /**
     * Enforce specific casing for the component naming style in template.
     * https://eslint.vuejs.org/rules/component-name-in-template-casing.html
     */
    'vue/component-name-in-template-casing': 'off',

    /**
     * Enforce the casing of component name in `components` options.
     * https://eslint.vuejs.org/rules/component-options-name-casing.html
     */
    'vue/component-options-name-casing': 'off',

    /**
     * Enforce order of component top-level elements.
     * https://eslint.vuejs.org/rules/component-tags-order.html
     */
    'vue/component-tags-order': [
      'warn',
      {
        order: ['template', 'script', 'style'],
      },
    ],

    /**
     * Enforce specific casing for custom event name.
     * https://eslint.vuejs.org/rules/custom-event-name-casing.html
     */
    'vue/custom-event-name-casing': 'off',

    /**
     * Enforce dot notation whenever possible in `<template>`.
     * https://eslint.vuejs.org/rules/dot-notation.html
     */
    'vue/dot-notation': 'error',

    /**
     * Require the use of `===` and `!==` in `<template>`.
     * https://eslint.vuejs.org/rules/eqeqeq.html
     */
    'vue/eqeqeq': 'error',

    /**
     * Enforce the location of first attribute.
     * https://eslint.vuejs.org/rules/first-attribute-linebreak.html
     */
    'vue/first-attribute-linebreak': 'warn',

    /**
     * Disallow usage of button without an explicit type attribute.
     * https://eslint.vuejs.org/rules/html-button-has-type.html
     */
    'vue/html-button-has-type': 'off',

    /**
     * Enforce unified line brake in HTML comments.
     * https://eslint.vuejs.org/rules/html-comment-content-newline.html
     */
    'vue/html-comment-content-newline': 'off',

    /**
     * Enforce unified spacing in HTML comments.
     * https://eslint.vuejs.org/rules/html-comment-content-spacing.html
     */
    'vue/html-comment-content-spacing': 'off',

    /**
     * Enforce consistent indentation in HTML comments.
     * https://eslint.vuejs.org/rules/html-comment-indent.html
     */
    'vue/html-comment-indent': 'off',

    /**
     * Enforce self-closing style.
     * https://eslint.vuejs.org/rules/html-self-closing.html
     */
    'vue/html-self-closing': 'warn',

    /**
     * Prevent variables used in JSX to be marked as unused.
     * https://eslint.vuejs.org/rules/jsx-uses-vars.html
     */
    'vue/jsx-uses-vars': 'error',

    /**
     * Require component name property to match its file name.
     * https://eslint.vuejs.org/rules/match-component-file-name.html
     */
    'vue/match-component-file-name': 'off',

    /**
     * Require component names to be always multi-word.
     * https://eslint.vuejs.org/rules/multi-word-component-names.html
     */
    'vue/multi-word-component-names': 'error',

    /**
     * Enforce new lines between multi-line properties in Vue components.
     * https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html
     */
    'vue/new-line-between-multi-line-property': 'off',

    /**
     * Enforce Promise or callback style in `nextTick`.
     * https://eslint.vuejs.org/rules/next-tick-style.html
     */
    'vue/next-tick-style': 'off',

    /**
     * Disallow using arrow functions to define watcher.
     * https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html
     */
    'vue/no-arrow-functions-in-watch': 'error',

    /**
     * Disallow asynchronous actions in computed properties.
     * https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
     */
    'vue/no-async-in-computed-properties': 'error',

    /**
     * Disallow the use of bare strings in `<template>`.
     * https://eslint.vuejs.org/rules/no-bare-strings-in-template.html
     */
    'vue/no-bare-strings-in-template': 'off',

    /**
     * Disallow boolean defaults.
     * https://eslint.vuejs.org/rules/no-boolean-default.html
     */
    'vue/no-boolean-default': 'off',

    /**
     * Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`.
     * https://eslint.vuejs.org/rules/no-child-content.html
     */
    'vue/no-child-content': 'off',

    /**
     * Disallow accessing computed properties in `data`.
     * https://eslint.vuejs.org/rules/no-computed-properties-in-data.html
     */
    'vue/no-computed-properties-in-data': 'error',

    /**
     * Disallow constant expressions in conditions in `<template>`.
     * https://eslint.vuejs.org/rules/no-constant-condition.html
     */
    'vue/no-constant-condition': 'error',

    /**
     * Disallow custom modifiers on v-model used on the component.
     * https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html
     */
    'vue/no-custom-modifiers-on-v-model': vueVersion === 3 ? 'off' : 'error',

    /**
     * Disallow using deprecated object declaration on data (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html
     */
    'vue/no-deprecated-data-object-declaration': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html
     */
    'vue/no-deprecated-destroyed-lifecycle': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html
     */
    'vue/no-deprecated-dollar-listeners-api': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html
     */
    'vue/no-deprecated-dollar-scopedslots-api': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated events api (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-events-api.html
     */
    'vue/no-deprecated-events-api': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated filters syntax (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-filter.html
     */
    'vue/no-deprecated-filter': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated the `functional` template (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-functional-template.html
     */
    'vue/no-deprecated-functional-template': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html
     */
    'vue/no-deprecated-html-element-is': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-inline-template.html
     */
    'vue/no-deprecated-inline-template': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow deprecated `this` access in props default function (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html
     */
    'vue/no-deprecated-props-default-this': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html
     */
    'vue/no-deprecated-router-link-tag-prop': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow deprecated `scope` attribute (in Vue.js 2.5.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html
     */
    'vue/no-deprecated-scope-attribute': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
     */
    'vue/no-deprecated-slot-attribute': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
     */
    'vue/no-deprecated-slot-scope-attribute': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html
     */
    'vue/no-deprecated-v-bind-sync': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-v-is.html
     */
    'vue/no-deprecated-v-is': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html
     */
    'vue/no-deprecated-v-on-native-modifier': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html
     */
    'vue/no-deprecated-v-on-number-modifiers': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).
     * https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html
     */
    'vue/no-deprecated-vue-config-keycodes': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow duplication of field names.
     * https://eslint.vuejs.org/rules/no-dupe-keys.html
     */
    'vue/no-dupe-keys': 'error',

    /**
     * Disallow duplicate conditions in `v-if` / `v-else-if` chains.
     * https://eslint.vuejs.org/rules/no-dupe-v-else-if.html
     */
    'vue/no-dupe-v-else-if': 'error',

    /**
     * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`.
     * https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html
     */
    'vue/no-duplicate-attr-inheritance': 'off',

    /**
     * Disallow duplication of attributes.
     * https://eslint.vuejs.org/rules/no-duplicate-attributes.html
     */
    'vue/no-duplicate-attributes': 'error',

    /**
     * Disallow the `<template>` `<script>` `<style>` block to be empty.
     */
    'vue/no-empty-component-block': 'error',

    /**
     * Disallow empty destructuring patterns in `<template>`.
     * https://eslint.vuejs.org/rules/no-empty-pattern.html
     */
    'vue/no-empty-pattern': 'error',

    /**
     * Disallow `export` in `<script setup>`.
     * https://eslint.vuejs.org/rules/no-export-in-script-setup.html
     */
    'vue/no-export-in-script-setup': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow asynchronously registered `expose`.
     * https://eslint.vuejs.org/rules/no-expose-after-await.html
     */
    'vue/no-expose-after-await': vueVersion === 3 ? 'error' : 'off',

    /**
     * Require valid keys in model option.
     * https://eslint.vuejs.org/rules/no-invalid-model-keys.html
     */
    'vue/no-invalid-model-keys': 'error',

    /**
     * Disallow irregular whitespace in `.vue` files.
     * https://eslint.vuejs.org/rules/no-irregular-whitespace.html
     */
    'vue/no-irregular-whitespace': 'error',

    /**
     * Disallow asynchronously registered lifecycle hooks.
     * https://eslint.vuejs.org/rules/no-lifecycle-after-await.html
     */
    'vue/no-lifecycle-after-await': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow unnecessary `<template>`.
     * https://eslint.vuejs.org/rules/no-lone-template.html
     */
    'vue/no-lone-template': 'warn',

    /**
     * Disallow literal numbers that lose precision in `<template>`.
     * https://eslint.vuejs.org/rules/no-loss-of-precision.html
     */
    'vue/no-loss-of-precision': 'error',

    /**
     * Disallow to pass multiple objects into array to class.
     * https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html
     */
    'vue/no-multiple-objects-in-class': 'error',

    /**
     * Disallow to pass multiple arguments to scoped slots.
     * https://eslint.vuejs.org/rules/no-multiple-slot-args.html
     */
    'vue/no-multiple-slot-args': 'warn',

    /**
     * Disallow adding multiple root nodes to the template.
     * https://eslint.vuejs.org/rules/no-multiple-template-root.html
     */
    'vue/no-multiple-template-root': vueVersion === 3 ? 'off' : 'error',

    /**
     * Disallow mutation of component props.
     * https://eslint.vuejs.org/rules/no-mutating-props.html
     */
    'vue/no-mutating-props': 'error',

    /**
     * Disallow parsing errors in `<template>`.
     * https://eslint.vuejs.org/rules/no-parsing-error.html
     */
    'vue/no-parsing-error': 'error',

    /**
     * Disallow a potential typo in your component property.
     * https://eslint.vuejs.org/rules/no-potential-component-option-typo.html
     */
    'vue/no-potential-component-option-typo': 'warn',

    /**
     * Disallow use of value wrapped by `ref()` (Composition API) as an operand.
     * https://eslint.vuejs.org/rules/no-ref-as-operand.html
     */
    'vue/no-ref-as-operand': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow the use of reserved names in component definitions.
     * https://eslint.vuejs.org/rules/no-reserved-component-names.html
     */
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: vueVersion !== 3,
        disallowVue3BuiltInComponents: vueVersion === 3,
      },
    ],

    /**
     * Disallow overwriting reserved keys.
     * https://eslint.vuejs.org/rules/no-reserved-keys.html
     */
    'vue/no-reserved-keys': 'error',

    /**
     * Disallow reserved names in props.
     * https://eslint.vuejs.org/rules/no-reserved-props.html
     */
    'vue/no-reserved-props': [
      'error',
      {
        vueVersion,
      },
    ],

    /**
     * Disallow specific block.
     * https://eslint.vuejs.org/rules/no-restricted-block.html
     */
    'vue/no-restricted-block': 'off',

    /**
     * Disallow asynchronously called restricted methods.
     * https://eslint.vuejs.org/rules/no-restricted-call-after-await.html
     */
    'vue/no-restricted-call-after-await': 'off',

    /**
     * Disallow specific classes in Vue components.
     * https://eslint.vuejs.org/rules/no-restricted-class.html
     */
    'vue/no-restricted-class': 'off',

    /**
     * Disallow specific component option.
     * https://eslint.vuejs.org/rules/no-restricted-component-options.html
     */
    'vue/no-restricted-component-options': 'off',

    /**
     * Disallow specific custom event.
     * https://eslint.vuejs.org/rules/no-restricted-custom-event.html
     */
    'vue/no-restricted-custom-event': 'off',

    /**
     * Disallow specific props.
     * https://eslint.vuejs.org/rules/no-restricted-props.html
     */
    'vue/no-restricted-props': 'off',

    /**
     * Disallow specific attribute.
     * https://eslint.vuejs.org/rules/no-restricted-static-attribute.html
     */
    'vue/no-restricted-static-attribute': 'off',

    /**
     * Disallow specified syntax in `<template>`.
     * https://eslint.vuejs.org/rules/no-restricted-syntax.html
     */
    'vue/no-restricted-syntax': ['error', 'WithStatement'],

    /**
     * Disallow specific argument in `v-bind`.
     * https://eslint.vuejs.org/rules/no-restricted-v-bind.html
     */
    'vue/no-restricted-v-bind': 'error',

    /**
     * Disallow destructuring of `props` passed to `setup`.
     * https://eslint.vuejs.org/rules/no-setup-props-destructure.html
     */
    'vue/no-setup-props-destructure': vueVersion === 3 ? 'error' : 'off',

    /**
     * Enforce component's data property to be a function.
     * https://eslint.vuejs.org/rules/no-shared-component-data.html
     */
    'vue/no-shared-component-data': 'error',

    /**
     * Disallow side effects in computed properties.
     * https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
     */
    'vue/no-side-effects-in-computed-properties': 'error',

    /**
     * Disallow sparse arrays in `<template>`.
     * https://eslint.vuejs.org/rules/no-sparse-arrays.html
     */
    'vue/no-sparse-arrays': 'error',

    /**
     * Disallow static inline `style` attributes.
     * https://eslint.vuejs.org/rules/no-static-inline-styles.html
     */
    'vue/no-static-inline-styles': 'off',

    /**
     * Disallow `key` attribute on `<template>`.
     * https://eslint.vuejs.org/rules/no-template-key.html
     */
    'vue/no-template-key': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     * https://eslint.vuejs.org/rules/no-template-shadow.html
     */
    'vue/no-template-shadow': 'warn',

    /**
     * Disallow target="_blank" attribute without rel="noopener noreferrer".
     * https://eslint.vuejs.org/rules/no-template-target-blank.html
     */
    'vue/no-template-target-blank': 'error',

    /**
     * Disallow mustaches in `<textarea>`.
     * https://eslint.vuejs.org/rules/no-textarea-mustache.html
     */
    'vue/no-textarea-mustache': 'error',

    /**
     * Disallow `this` usage in a `beforeRouteEnter` method.
     * https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html
     */
    'vue/no-this-in-before-route-enter': 'error',

    /**
     * Disallow use of undefined components in `<template>`.
     * https://eslint.vuejs.org/rules/no-undef-components.html
     */
    'vue/no-undef-components': 'error',

    /**
     * Disallow undefined properties.
     * https://eslint.vuejs.org/rules/no-undef-properties.html
     */
    'vue/no-undef-properties': 'error',

    /**
     * Disallow unsupported Vue.js syntax on the specified version.
     * https://eslint.vuejs.org/rules/no-unsupported-features.html
     */
    'vue/no-unsupported-features': [
      'error',
      {
        version: vueVersion === 3 ? '^3.2.0' : '^2.6.0',
      },
    ],

    /**
     * Disallow registering components that are not used inside templates.
     * https://eslint.vuejs.org/rules/no-unused-components.html
     */
    'vue/no-unused-components': 'error',

    /**
     * Disallow unused properties.
     * https://eslint.vuejs.org/rules/no-unused-properties.html
     */
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed'],
      },
    ],

    /**
     * Disallow unused refs.
     * https://eslint.vuejs.org/rules/no-unused-refs.html
     */
    'vue/no-unused-refs': 'error',

    /**
     * Disallow unused variable definitions of v-for directives or scope attributes.
     * https://eslint.vuejs.org/rules/no-unused-vars.html
     */
    'vue/no-unused-vars': 'error',

    /**
     * Disallow use computed property like method.
     * https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html
     */
    'vue/no-use-computed-property-like-method': 'error',

    /**
     * Disallow use v-if on the same element as v-for.
     * https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
     */
    'vue/no-use-v-if-with-v-for': 'error',

    /**
     * Disallow unnecessary concatenation of literals or template literals in `<template>`.
     * https://eslint.vuejs.org/rules/no-useless-concat.html
     */
    'vue/no-useless-concat': 'error',

    /**
     * Disallow unnecessary mustache interpolations.
     * https://eslint.vuejs.org/rules/no-useless-mustaches.html
     */
    'vue/no-useless-mustaches': 'error',

    /**
     * Disallow useless attribute on `<template>`.
     * https://eslint.vuejs.org/rules/no-useless-template-attributes.html
     */
    'vue/no-useless-template-attributes': 'error',

    /**
     * Disallow unnecessary `v-bind` directives.
     * https://eslint.vuejs.org/rules/no-useless-v-bind.html
     */
    'vue/no-useless-v-bind': 'error',

    /**
     * Disallow `key` attribute on `<template v-for>`.
     * https://eslint.vuejs.org/rules/no-v-for-template-key.html
     */
    'vue/no-v-for-template-key': vueVersion === 3 ? 'off' : 'error',

    /**
     * Disallow key of `<template v-for>` placed on child elements.
     * https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html
     */
    'vue/no-v-for-template-key-on-child': vueVersion === 3 ? 'error' : 'off',

    /**
     * Disallow use of v-html to prevent XSS attack.
     * https://eslint.vuejs.org/rules/no-v-html.html
     */
    'vue/no-v-html': 'warn',

    /**
     * Disallow adding an argument to `v-model` used in custom component.
     * https://eslint.vuejs.org/rules/no-v-model-argument.html
     */
    'vue/no-v-model-argument': vueVersion === 3 ? 'off' : 'error',

    /**
     * Disallow use of v-text.
     * https://eslint.vuejs.org/rules/no-v-text.html
     */
    'vue/no-v-text': 'error',

    /**
     * Disallow v-text / v-html on component.
     * https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html
     */
    'vue/no-v-text-v-html-on-component': 'error',

    /**
     * Disallow asynchronously registered `watch`.
     * https://eslint.vuejs.org/rules/no-watch-after-await.html
     */
    'vue/no-watch-after-await': vueVersion === 3 ? 'error' : 'off',

    /**
     * Require or disallow method and property shorthand syntax for object literals in `<template>`.
     * https://eslint.vuejs.org/rules/object-shorthand.html
     */
    'vue/object-shorthand': ['error', 'properties'],

    /**
     * Enforce that each component should be in its own file.
     * https://eslint.vuejs.org/rules/one-component-per-file.html
     */
    'vue/one-component-per-file': 'warn',

    /**
     * Enforce order of properties in components.
     * https://eslint.vuejs.org/rules/order-in-components.html
     */
    'vue/order-in-components': 'warn',

    /**
     * Require or disallow padding lines between blocks.
     * https://eslint.vuejs.org/rules/padding-line-between-blocks.html
     */
    'vue/padding-line-between-blocks': 'error',

    /**
     * Enforce import from 'vue' instead of import from '@vue/*'.
     * https://eslint.vuejs.org/rules/prefer-import-from-vue.html
     */
    'vue/prefer-import-from-vue': 'error',

    /**
     * Require static class names in template to be in a separate `class` attribute.
     * https://eslint.vuejs.org/rules/prefer-separate-static-class.html
     */
    'vue/prefer-separate-static-class': 'warn',

    /**
     * Require template literals instead of string concatenation in `<template>`.
     * https://eslint.vuejs.org/rules/prefer-template.html
     */
    'vue/prefer-template': 'error',

    /**
     * Require shorthand form attribute when `v-bind` value is `true`.
     * https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html
     */
    'vue/prefer-true-attribute-shorthand': 'error',

    /**
     * Enforce specific casing for the Prop name in Vue components.
     * https://eslint.vuejs.org/rules/prop-name-casing.html
     */
    'vue/prop-name-casing': 'warn',

    /**
     * Require `v-bind:is` of `<component>` elements.
     * https://eslint.vuejs.org/rules/require-component-is.html
     */
    'vue/require-component-is': 'error',

    /**
     * Require default value for props.
     * https://eslint.vuejs.org/rules/require-default-prop.html
     */
    'vue/require-default-prop': 'warn',

    /**
     * Require the component to be directly exported.
     * https://eslint.vuejs.org/rules/require-direct-export.html
     */
    'vue/require-direct-export': 'warn',

    /**
     * Require type definitions in emits.
     * https://eslint.vuejs.org/rules/require-emit-validator.html
     */
    'vue/require-emit-validator': vueVersion === 3 ? 'warn' : 'off',

    /**
     * Require `emits` option with name triggered by `$emit()`.
     * https://eslint.vuejs.org/rules/require-explicit-emits.html
     */
    'vue/require-explicit-emits': vueVersion === 3 ? 'warn' : 'off',

    /**
     * Require declare public properties using `expose`.
     * https://eslint.vuejs.org/rules/require-expose.html
     */
    'vue/require-expose': vueVersion === 3 ? 'warn' : 'off',

    /**
     * Require a name property in Vue components.
     * https://eslint.vuejs.org/rules/require-name-property.html
     */
    'vue/require-name-property': 'error',

    /**
     * Require prop type to be a constructor.
     * https://eslint.vuejs.org/rules/require-prop-type-constructor.html
     */
    'vue/require-prop-type-constructor': 'error',

    /**
     * Require type definitions in props.
     * https://eslint.vuejs.org/rules/require-prop-types.html
     */
    'vue/require-prop-types': 'warn',

    /**
     * Enforce render function to always return value.
     * https://eslint.vuejs.org/rules/require-render-return.html
     */
    'vue/require-render-return': 'error',

    /**
     * Enforce properties of `$slots` to be used as a function.
     * https://eslint.vuejs.org/rules/require-slots-as-functions.html
     */
    'vue/require-slots-as-functions': vueVersion === 3 ? 'error' : 'off',

    /**
     * Require control the display of the content inside `<transition>`.
     * https://eslint.vuejs.org/rules/require-toggle-inside-transition.html
     */
    'vue/require-toggle-inside-transition': vueVersion === 3 ? 'error' : 'off',

    /**
     * Require `v-bind:key` with `v-for` directives.
     * https://eslint.vuejs.org/rules/require-v-for-key.html
     */
    'vue/require-v-for-key': 'error',

    /**
     * Enforce props default values to be valid.
     * https://eslint.vuejs.org/rules/require-valid-default-prop.html
     */
    'vue/require-valid-default-prop': 'error',

    /**
     * Enforce that a return statement is present in computed property.
     * https://eslint.vuejs.org/rules/return-in-computed-property.html
     */
    'vue/return-in-computed-property': 'error',

    /**
     * Enforce that a return statement is present in emits validator.
     * https://eslint.vuejs.org/rules/return-in-emits-validator.html
     */
    'vue/return-in-emits-validator': vueVersion === 3 ? 'error' : 'off',

    /**
     * Prevent `<script setup>` variables used in `<template>` to be marked as unused.
     * https://eslint.vuejs.org/rules/script-setup-uses-vars.html
     */
    'vue/script-setup-uses-vars': 'error',

    /**
     * Enforce sort-keys in a manner that is compatible with order-in-components.
     * https://eslint.vuejs.org/rules/sort-keys.html
     */
    'vue/sort-keys': 'off',

    /**
     * Enforce static class names order.
     * https://eslint.vuejs.org/rules/static-class-names-order.html
     */
    'vue/static-class-names-order': 'off',

    /**
     * Disallow usage of `this` in template.
     * https://eslint.vuejs.org/rules/this-in-template.html
     */
    'vue/this-in-template': 'warn',

    /**
     * Enforce usage of `exact` modifier on `v-on`.
     * https://eslint.vuejs.org/rules/use-v-on-exact.html
     */
    'vue/use-v-on-exact': 'error',

    /**
     * Enforce `v-bind` directive style.
     * https://eslint.vuejs.org/rules/v-bind-style.html
     */
    'vue/v-bind-style': 'warn',

    /**
     * Enforce `v-for` directive's delimiter style.
     * https://eslint.vuejs.org/rules/v-for-delimiter-style.html
     */
    'vue/v-for-delimiter-style': 'warn',

    /**
     * Enforce `v-on` event naming style on custom components in template.
     * https://eslint.vuejs.org/rules/v-on-event-hyphenation.html
     */
    'vue/v-on-event-hyphenation': vueVersion === 3 ? 'warn' : 'off',

    /**
     * Enforce or forbid parentheses after method calls without arguments in `v-on` directives.
     * https://eslint.vuejs.org/rules/v-on-function-call.html
     */
    'vue/v-on-function-call': 'warn',

    /**
     * Enforce `v-on` directive style.
     * https://eslint.vuejs.org/rules/v-on-style.html
     */
    'vue/v-on-style': 'warn',

    /**
     * Enforce `v-slot` directive style.
     * https://eslint.vuejs.org/rules/v-slot-style.html
     */
    'vue/v-slot-style': 'warn',

    /**
     * Enforce valid `defineEmits` compiler macro.
     * https://eslint.vuejs.org/rules/valid-define-emits.html
     */
    'vue/valid-define-emits': vueVersion === 3 ? 'error' : 'off',

    /**
     * Enforce valid `defineProps` compiler macro.
     * https://eslint.vuejs.org/rules/valid-define-props.html
     */
    'vue/valid-define-props': vueVersion === 3 ? 'error' : 'off',

    /**
     * Enforce valid `nextTick` function calls.
     * https://eslint.vuejs.org/rules/valid-next-tick.html
     */
    'vue/valid-next-tick': 'error',

    /**
     * Enforce valid template root.
     * https://eslint.vuejs.org/rules/valid-template-root.html
     */
    'vue/valid-template-root': 'error',

    /**
     * Enforce valid `v-bind` directives.
     * https://eslint.vuejs.org/rules/valid-v-bind.html
     */
    'vue/valid-v-bind': 'error',

    /**
     * Enforce valid `.sync` modifier on `v-bind` directives.
     * https://eslint.vuejs.org/rules/valid-v-bind-sync.html
     */
    'vue/valid-v-bind-sync': vueVersion === 3 ? 'off' : 'error',

    /**
     * Enforce valid `v-cloak` directives.
     * https://eslint.vuejs.org/rules/valid-v-cloak.html
     */
    'vue/valid-v-cloak': 'error',

    /**
     * Enforce valid `v-else` directives.
     * https://eslint.vuejs.org/rules/valid-v-else.html
     */
    'vue/valid-v-else': 'error',

    /**
     * Enforce valid `v-else-if` directives.
     * https://eslint.vuejs.org/rules/valid-v-else-if.html
     */
    'vue/valid-v-else-if': 'error',

    /**
     * Enforce valid `v-for` directives.
     * https://eslint.vuejs.org/rules/valid-v-for.html
     */
    'vue/valid-v-for': 'error',

    /**
     * Enforce valid `v-html` directives.
     * https://eslint.vuejs.org/rules/valid-v-html.html
     */
    'vue/valid-v-html': 'error',

    /**
     * Enforce valid `v-if` directives.
     * https://eslint.vuejs.org/rules/valid-v-if.html
     */
    'vue/valid-v-if': 'error',

    /**
     * Enforce valid `v-is` directives.
     * https://eslint.vuejs.org/rules/valid-v-is.html
     */
    'vue/valid-v-is': vueVersion === 3 ? 'error' : 'off',

    /**
     * Enforce valid `v-memo` directives.
     * https://eslint.vuejs.org/rules/valid-v-memo.html
     */
    'vue/valid-v-memo': vueVersion === 3 ? 'error' : 'off',

    /**
     * Enforce valid `v-model` directives.
     * https://eslint.vuejs.org/rules/valid-v-model.html
     */
    'vue/valid-v-model': 'error',

    /**
     * Enforce valid `v-on` directives.
     * https://eslint.vuejs.org/rules/valid-v-on.html
     */
    'vue/valid-v-on': 'error',

    /**
     * Enforce valid `v-once` directives.
     * https://eslint.vuejs.org/rules/valid-v-once.html
     */
    'vue/valid-v-once': 'error',

    /**
     * Enforce valid `v-pre` directives.
     * https://eslint.vuejs.org/rules/valid-v-pre.html
     */
    'vue/valid-v-pre': 'error',

    /**
     * Enforce valid `v-show` directives.
     * https://eslint.vuejs.org/rules/valid-v-show.html
     */
    'vue/valid-v-show': 'error',

    /**
     * Enforce valid `v-slot` directives.
     * https://eslint.vuejs.org/rules/valid-v-slot.html
     */
    'vue/valid-v-slot': 'error',

    /**
     * Enforce valid `v-text` directives.
     * https://eslint.vuejs.org/rules/valid-v-text.html
     */
    'vue/valid-v-text': 'error',
  },
  overrides: [
    {
      files: ['**/*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 2020,
        parser: hasTypeScriptParser ? '@typescript-eslint/parser' : undefined,
        sourceType: 'module',
      },
    },
  ],
}
