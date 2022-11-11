const findup = require('findup-sync')
const tsConfig = findup('tsconfig.json')

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['prettier', './import.js'],
  rules: {
    /**
     * Enforce getter and setter pairs in objects and classes.
     * https://eslint.org/docs/rules/accessor-pairs
     */
    'accessor-pairs': 'error',

    /**
     * Enforce `return` statements in callbacks of array methods.
     * https://eslint.org/docs/rules/array-callback-return
     */
    'array-callback-return': 'error',

    /**
     * Require braces around arrow function bodies.
     * https://eslint.org/docs/rules/arrow-body-style
     */
    'arrow-body-style': 'off',

    /**
     * Enforce the use of variables within the scope they are defined.
     * https://eslint.org/docs/rules/block-scoped-var
     */
    'block-scoped-var': 'error',

    /**
     * Enforce camelcase naming convention.
     * https://eslint.org/docs/rules/camelcase
     */
    camelcase: 'off',

    /**
     * Enforce or disallow capitalization of the first letter of a comment.
     * https://eslint.org/docs/rules/capitalized-comments
     */
    'capitalized-comments': 'off',

    /**
     * Enforce that class methods utilize `this`.
     * https://eslint.org/docs/rules/class-methods-use-this
     */
    'class-methods-use-this': 'off',

    /**
     * Enforce a maximum cyclomatic complexity allowed in a program.
     * https://eslint.org/docs/rules/complexity
     */
    complexity: ['error', 20],

    /**
     * Require `return` statements to either always or never specify values.
     * https://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'error',

    /**
     * Enforce consistent naming when capturing the current execution context.
     * https://eslint.org/docs/rules/consistent-this
     */
    'consistent-this': 'off',

    /**
     * Require `super()` calls in constructors.
     * https://eslint.org/docs/rules/constructor-super
     */
    'constructor-super': 'error',

    /**
     * Enforce consistent brace style for all control statements.
     * https://eslint.org/docs/rules/curly
     */
    curly: ['error', 'multi-line'],

    /**
     * Require `default` cases in `switch` statements.
     * https://eslint.org/docs/rules/default-case
     */
    'default-case': 'error',

    /**
     * Enforce default clauses in switch statements to be last.
     * https://eslint.org/docs/rules/default-case-last
     */
    'default-case-last': 'error',

    /**
     * Enforce default parameters to be last.
     * https://eslint.org/docs/rules/default-param-last
     */
    'default-param-last': 'error',

    /**
     * Enforce dot notation whenever possible.
     * https://eslint.org/docs/rules/dot-notation
     */
    'dot-notation': 'error',

    /**
     * Require the use of `===` and `!==`.
     * https://eslint.org/docs/rules/eqeqeq
     */
    eqeqeq: 'error',

    /**
     * Enforce "for" loop update clause moving the counter in the right direction.
     * https://eslint.org/docs/rules/for-direction
     */
    'for-direction': 'error',

    /**
     * Require function names to match the name of the variable or property to which they are assigned.
     * https://eslint.org/docs/rules/func-name-matching
     */
    'func-name-matching': 'error',

    /**
     * Require or disallow named `function` expressions.
     * https://eslint.org/docs/rules/func-names
     */
    'func-names': 'error',

    /**
     * Enforce the consistent use of either `function` declarations or expressions.
     * https://eslint.org/docs/rules/func-style
     */
    'func-style': 'off',

    /**
     * Enforce `return` statements in getters.
     * https://eslint.org/docs/rules/getter-return
     */
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],

    /**
     * Require grouped accessor pairs in object literals and classes.
     * https://eslint.org/docs/rules/grouped-accessor-pairs
     */
    'grouped-accessor-pairs': 'off',

    /**
     * Require `for-in` loops to include an `if` statement.
     * https://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'error',

    /**
     * Disallow specified identifiers.
     * https://eslint.org/docs/rules/id-denylist
     */
    'id-denylist': 'error',

    /**
     * Enforce minimum and maximum identifier lengths.
     * https://eslint.org/docs/rules/id-length
     */
    'id-length': 'off',

    /**
     * Require identifiers to match a specified regular expression.
     * https://eslint.org/docs/rules/id-match
     */
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],

    /**
     * Require or disallow initialization in variable declarations.
     * https://eslint.org/docs/rules/init-declarations
     */
    'init-declarations': 'off',

    /**
     * Enforces position of line comments.
     * https://eslint.org/docs/rules/line-comment-position
     */
    'line-comment-position': 'off',

    /**
     * https://eslint.org/docs/rules/logical-assignment-operators
     */
    'logical-assignment-operators': 'error',

    /**
     * Requires or disallows an empty line between class members.
     * https://eslint.org/docs/rules/lines-between-class-members
     */
    'lines-between-class-members': 'off',

    /**
     * Enforce a maximum number of classes per file.
     * https://eslint.org/docs/rules/max-classes-per-file
     */
    'max-classes-per-file': 'off',

    /**
     * Enforce a maximum depth that blocks can be nested.
     * https://eslint.org/docs/rules/max-depth
     */
    'max-depth': ['error', 4],

    /**
     * Enforce a maximum number of lines per file.
     * https://eslint.org/docs/rules/max-lines
     */
    'max-lines': [
      'error',
      {
        max: 2500,
        skipBlankLines: false,
        skipComments: false,
      },
    ],

    /**
     * Enforce a maximum number of lines of code in a function.
     * https://eslint.org/docs/rules/max-lines-per-function
     */
    'max-lines-per-function': 'off',

    /**
     * Enforce a maximum depth that callbacks can be nested.
     * https://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': ['error', 7],

    /**
     * Enforce a maximum number of parameters in function definitions.
     * https://eslint.org/docs/rules/max-params
     */
    'max-params': ['error', 7],

    /**
     * Enforce a maximum number of statements allowed in function blocks.
     * https://eslint.org/docs/rules/max-statements
     */
    'max-statements': 'off',

    /**
     * Enforce a maximum number of statements allowed per line.
     * https://eslint.org/docs/rules/max-statements-per-line
     */
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],

    /**
     * Enforce a particular style for multiline comments.
     * https://eslint.org/docs/rules/multiline-comment-style
     */
    'multiline-comment-style': 'off',

    /**
     * Require constructor names to begin with a capital letter.
     * https://eslint.org/docs/rules/new-cap
     */
    'new-cap': 'error',

    /**
     * Disallow the use of `alert`, `confirm`, and `prompt`.
     * https://eslint.org/docs/rules/no-alert
     */
    'no-alert': 'error',

    /**
     * Disallow `Array` constructors.
     * https://eslint.org/docs/rules/no-array-constructor
     */
    'no-array-constructor': 'error',

    /**
     * Disallow using an async function as a Promise executor.
     * https://eslint.org/docs/rules/no-async-promise-executor
     */
    'no-async-promise-executor': 'warn',

    /**
     * Disallow `await` inside of loops.
     * https://eslint.org/docs/rules/no-await-in-loop
     */
    'no-await-in-loop': 'error',

    /**
     * Disallow bitwise operators.
     * https://eslint.org/docs/rules/no-bitwise
     */
    'no-bitwise': 'error',

    /**
     * Disallow the use of `arguments.caller` or `arguments.callee`.
     * https://eslint.org/docs/rules/no-caller
     */
    'no-caller': 'error',

    /**
     * Disallow lexical declarations in case clauses.
     * https://eslint.org/docs/rules/no-case-declarations
     */
    'no-case-declarations': 'error',

    /**
     * Disallow reassigning class members.
     * https://eslint.org/docs/rules/no-class-assign
     */
    'no-class-assign': 'error',

    /**
     * Disallow comparing against -0.
     * https://eslint.org/docs/rules/no-compare-neg-zero
     */
    'no-compare-neg-zero': 'error',

    /**
     * Disallow assignment operators in conditional expressions.
     * https://eslint.org/docs/rules/no-cond-assign
     */
    'no-cond-assign': 'error',

    /**
     * Disallow the use of `console`
     * https://eslint.org/docs/rules/no-console
     */
    'no-console': 'off',

    /**
     * Disallow reassigning `const` variables.
     * https://eslint.org/docs/rules/no-const-assign
     */
    'no-const-assign': 'error',

    /**
     * Disallows expressions where the operation doesn't affect the value.
     * https://eslint.org/docs/rules/no-constant-binary-expression
     */
    'no-constant-binary-expression': 'error',

    /**
     * Disallow constant expressions in conditions.
     * https://eslint.org/docs/rules/no-constant-condition
     */
    'no-constant-condition': 'error',

    /**
     * Disallow returning value from constructor.
     * https://eslint.org/docs/rules/no-constructor-return
     */
    'no-constructor-return': 'error',

    /**
     * Disallow `continue` statements.
     * https://eslint.org/docs/rules/no-continue
     */
    'no-continue': 'off',

    /**
     * Disallow control characters in regular expressions.
     * https://eslint.org/docs/rules/no-control-regex
     */
    'no-control-regex': 'error',

    /**
     * Disallow the use of `debugger`.
     * https://eslint.org/docs/rules/no-debugger
     */
    'no-debugger': 'error',

    /**
     * Disallow deleting variables.
     * https://eslint.org/docs/rules/no-delete-var
     */
    'no-delete-var': 'error',

    /**
     * Disallow division operators explicitly at the beginning of regular expressions.
     * https://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'error',

    /**
     * Disallow duplicate arguments in `function` definitions.
     * https://eslint.org/docs/rules/no-dupe-args
     */
    'no-dupe-args': 'error',

    /**
     * Disallow duplicate class members.
     * https://eslint.org/docs/rules/no-dupe-class-members
     */
    'no-dupe-class-members': 'error',

    /**
     * Disallow duplicate conditions in if-else-if chains.
     * https://eslint.org/docs/rules/no-dupe-else-if
     */
    'no-dupe-else-if': 'error',

    /**
     * Disallow duplicate keys in object literals.
     * https://eslint.org/docs/rules/no-dupe-keys
     */
    'no-dupe-keys': 'error',

    /**
     * Disallow duplicate case labels.
     * https://eslint.org/docs/rules/no-duplicate-case
     */
    'no-duplicate-case': 'error',

    /**
     * Disallow duplicate module imports.
     * https://eslint.org/docs/rules/no-duplicate-imports
     */
    'no-duplicate-imports': 'error',

    /**
     * Disallow `else` blocks after `return` statements in `if` statements.
     * https://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'off',

    /**
     * Disallow empty block statements.
     * https://eslint.org/docs/rules/no-empty
     */
    'no-empty': 'error',

    /**
     * Disallow empty character classes in regular expressions.
     * https://eslint.org/docs/rules/no-empty-character-class
     */
    'no-empty-character-class': 'error',

    /**
     * Disallow empty functions.
     * https://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'off',

    /**
     * Disallow empty destructuring patterns.
     * https://eslint.org/docs/rules/no-empty-pattern
     */
    'no-empty-pattern': 'error',

    /**
     * Disallow empty static blocks.
     * https://eslint.org/docs/rules/no-empty-static-block
     */
    'no-empty-static-block': 'error',

    /**
     * Disallow `null` comparisons without type-checking operators.
     * https://eslint.org/docs/rules/no-eq-null
     */
    'no-eq-null': 'off',

    /**
     * Disallow the use of `eval()`.
     * https://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'error',

    /**
     * Disallow reassigning exceptions in `catch` clauses.
     * https://eslint.org/docs/rules/no-ex-assign
     */
    'no-ex-assign': 'error',

    /**
     * Disallow extending native types.
     * https://eslint.org/docs/rules/no-extend-native
     */
    'no-extend-native': 'error',

    /**
     * Disallow unnecessary calls to `.bind()`.
     * https://eslint.org/docs/rules/no-extra-bind
     */
    'no-extra-bind': 'error',

    /**
     * Disallow unnecessary boolean casts.
     * https://eslint.org/docs/rules/no-extra-boolean-cast
     */
    'no-extra-boolean-cast': 'error',

    /**
     * Disallow unnecessary labels.
     * https://eslint.org/docs/rules/no-extra-label
     */
    'no-extra-label': 'error',

    /**
     * Disallow fallthrough of `case` statements.
     * https://eslint.org/docs/rules/no-fallthrough
     */
    'no-fallthrough': 'error',

    /**
     * Disallow reassigning `function` declarations.
     * https://eslint.org/docs/rules/no-func-assign
     */
    'no-func-assign': 'error',

    /**
     * Disallow assignments to native objects or read-only global variables.
     * https://eslint.org/docs/rules/no-global-assign
     */
    'no-global-assign': 'error',

    /**
     * Disallow shorthand type conversions.
     * https://eslint.org/docs/rules/no-implicit-coercion
     */
    'no-implicit-coercion': 'off',

    /**
     * Disallow declarations in the global scope.
     * https://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'error',

    /**
     * Disallow the use of `eval()`-like methods.
     * https://eslint.org/docs/rules/no-implied-eval
     */
    'no-implied-eval': 'error',

    /**
     * Disallow assigning to imported bindings.
     * https://eslint.org/docs/rules/no-import-assign
     */
    'no-import-assign': 'error',

    /**
     * Disallow inline comments after code.
     * https://eslint.org/docs/rules/no-inline-comments
     */
    'no-inline-comments': 'off',

    /**
     * Disallow variable or `function` declarations in nested blocks.
     * https://eslint.org/docs/rules/no-inner-declarations
     */
    'no-inner-declarations': 'error',

    /**
     * Disallow invalid regular expression strings in `RegExp` constructors.
     * https://eslint.org/docs/rules/no-invalid-regexp
     */
    'no-invalid-regexp': 'error',

    /**
     * Disallow `this` keywords outside of classes or class-like objects.
     * https://eslint.org/docs/rules/no-invalid-this
     */
    'no-invalid-this': 'error',

    /**
     * Disallow irregular whitespace.
     * https://eslint.org/docs/rules/no-irregular-whitespace
     */
    'no-irregular-whitespace': 'error',

    /**
     * Disallow the use of the `__iterator__` property.
     * https://eslint.org/docs/rules/no-iterator
     */
    'no-iterator': 'error',

    /**
     * Disallow labels that share a name with a variable.
     * https://eslint.org/docs/rules/no-label-var
     */
    'no-label-var': 'error',

    /**
     * Disallow labeled statements.
     * https://eslint.org/docs/rules/no-labels
     */
    'no-labels': 'error',

    /**
     * Disallow unnecessary nested blocks.
     * https://eslint.org/docs/rules/no-lone-blocks
     */
    'no-lone-blocks': 'error',

    /**
     * Disallow `if` statements as the only statement in `else` blocks.
     * https://eslint.org/docs/rules/no-lonely-if
     */
    'no-lonely-if': 'error',

    /**
     * Disallow function declarations that contain unsafe references inside loop statements.
     * https://eslint.org/docs/rules/no-loop-func
     */
    'no-loop-func': 'error',

    /**
     * Disallow literal numbers that lose precision.
     * https://eslint.org/docs/rules/no-loss-of-precision
     */
    'no-loss-of-precision': 'error',

    /**
     * Disallow magic numbers.
     * https://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': 'off',

    /**
     * Disallow characters which are made with multiple code points in character class syntax.
     * https://eslint.org/docs/rules/no-misleading-character-class
     */
    'no-misleading-character-class': 'error',

    /**
     * Disallow use of chained assignment expressions.
     * https://eslint.org/docs/rules/no-multi-assign
     */
    'no-multi-assign': 'error',

    /**
     * Disallow multiline strings.
     * https://eslint.org/docs/rules/no-multi-str
     */
    'no-multi-str': 'error',

    /**
     * Disallow negated conditions.
     * https://eslint.org/docs/rules/no-negated-condition
     */
    'no-negated-condition': 'error',

    /**
     * Disallow nested ternary expressions.
     * https://eslint.org/docs/rules/no-nested-ternary
     */
    'no-nested-ternary': 'off',

    /**
     * Disallow `new` operators outside of assignments or comparisons.
     * https://eslint.org/docs/rules/no-new
     */
    'no-new': 'error',

    /**
     * Disallow `new` operators with the `Function` object.
     * https://eslint.org/docs/rules/no-new-func
     */
    'no-new-func': 'error',

    /**
     * Disallow `new` operators with global non-constructor functions.
     * https://eslint.org/docs/rules/no-new-native-nonconstructor
     */
    'no-new-native-nonconstructor': 'error',

    /**
     * Disallow `Object` constructors.
     * https://eslint.org/docs/rules/no-new-object
     */
    'no-new-object': 'error',

    /**
     * Disallow `new` operators with the `Symbol` object.
     * https://eslint.org/docs/rules/no-new-symbol
     */
    'no-new-symbol': 'error',

    /**
     * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
     * https://eslint.org/docs/rules/no-new-wrappers
     */
    'no-new-wrappers': 'error',

    /**
     * Disallow `\8` and `\9` escape sequences in string literals.
     * https://eslint.org/docs/rules/no-nonoctal-decimal-escape
     */
    'no-nonoctal-decimal-escape': 'error',

    /**
     * Disallow calling global object properties as functions.
     * https://eslint.org/docs/rules/no-obj-calls
     */
    'no-obj-calls': 'error',

    /**
     * Disallow octal literals.
     * https://eslint.org/docs/rules/no-octal
     */
    'no-octal': 'error',

    /**
     * Disallow octal escape sequences in string literals.
     * https://eslint.org/docs/rules/no-octal-escape
     */
    'no-octal-escape': 'error',

    /**
     * Disallow reassigning `function` parameters.
     * https://eslint.org/docs/rules/no-param-reassign
     */
    'no-param-reassign': 'warn',

    /**
     * Disallow the unary operators `++` and `--`.
     * https://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 'off',

    /**
     * Disallow returning values from Promise executor functions.
     * https://eslint.org/docs/rules/no-promise-executor-return
     */
    'no-promise-executor-return': 'off',

    /**
     * Disallow the use of the `__proto__` property.
     * https://eslint.org/docs/rules/no-proto
     */
    'no-proto': 'error',

    /**
     * Disallow calling some `Object.prototype` methods directly on objects.
     * https://eslint.org/docs/rules/no-prototype-builtins
     */
    'no-prototype-builtins': 'off',

    /**
     * Disallow variable redeclaration.
     * https://eslint.org/docs/rules/no-redeclare
     */
    'no-redeclare': 'error',

    /**
     * Disallow multiple spaces in regular expressions.
     * https://eslint.org/docs/rules/no-regex-spaces
     */
    'no-regex-spaces': 'error',

    /**
     * Disallow specified names in exports.
     * https://eslint.org/docs/rules/no-restricted-exports
     */
    'no-restricted-exports': 'off',

    /**
     * Disallow specified global variables.
     * https://eslint.org/docs/rules/no-restricted-globals
     */
    'no-restricted-globals': ['error', 'event', 'fdescribe'],

    /**
     * Disallow specified modules when loaded by `import`.
     * https://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': 'off',

    /**
     * Disallow certain properties on certain objects.
     * https://eslint.org/docs/rules/no-restricted-properties
     */
    'no-restricted-properties': 'off',

    /**
     * Disallow specified syntax.
     * https://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': ['error', 'WithStatement'],

    /**
     * Disallow assignment operators in `return` statements.
     * https://eslint.org/docs/rules/no-return-assign
     */
    'no-return-assign': 'error',

    /**
     * Disallow unnecessary `return await`.
     * https://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'error',

    /**
     * Disallow `javascript:` urls.
     * https://eslint.org/docs/rules/no-script-url
     */
    'no-script-url': 'error',

    /**
     * Disallow assignments where both sides are exactly the same.
     * https://eslint.org/docs/rules/no-self-assign
     */
    'no-self-assign': 'error',

    /**
     * Disallow comparisons where both sides are exactly the same.
     * https://eslint.org/docs/rules/no-self-compare
     */
    'no-self-compare': 'error',

    /**
     * Disallow comma operators.
     * https://eslint.org/docs/rules/no-sequences
     */
    'no-sequences': 'error',

    /**
     * Disallow returning values from setters.
     * https://eslint.org/docs/rules/no-setter-return
     */
    'no-setter-return': 'error',

    /**
     * Disallow variable declarations from shadowing variables declared in the outer scope.
     * https://eslint.org/docs/rules/no-shadow
     */
    'no-shadow': 'error',

    /**
     * Disallow identifiers from shadowing restricted names.
     * https://eslint.org/docs/rules/no-shadow-restricted-names
     */
    'no-shadow-restricted-names': 'error',

    /**
     * Disallow sparse arrays.
     * https://eslint.org/docs/rules/no-sparse-arrays
     */
    'no-sparse-arrays': 'error',

    /**
     * Disallow template literal placeholder syntax in regular strings.
     * https://eslint.org/docs/rules/no-template-curly-in-string
     */
    'no-template-curly-in-string': 'error',

    /**
     * Disallow ternary operators.
     * https://eslint.org/docs/rules/no-ternary
     */
    'no-ternary': 'off',

    /**
     * Disallow `this`/`super` before calling `super()` in constructors.
     * https://eslint.org/docs/rules/no-this-before-super
     */
    'no-this-before-super': 'error',

    /**
     * Disallow throwing literals as exceptions.
     * https://eslint.org/docs/rules/no-throw-literal
     */
    'no-throw-literal': 'error',

    /**
     * Disallow the use of undeclared variables unless mentioned in `global` comments.
     * https://eslint.org/docs/rules/no-undef
     */
    'no-undef': 'error',

    /**
     * Disallow initializing variables to `undefined`.
     * https://eslint.org/docs/rules/no-undef-init
     */
    'no-undef-init': 'error',

    /**
     * Disallow the use of `undefined` as an identifier.
     * https://eslint.org/docs/rules/no-undefined
     */
    'no-undefined': 'off',

    /**
     * Disallow dangling underscores in identifiers.
     * https://eslint.org/docs/rules/no-underscore-dangle
     */
    'no-underscore-dangle': 'off',

    /**
     * Disallow confusing multiline expressions.
     * https://eslint.org/docs/rules/no-unexpected-multiline
     */
    'no-unexpected-multiline': 'error',

    /**
     * Disallow unmodified loop conditions.
     * https://eslint.org/docs/rules/no-unmodified-loop-condition
     */
    'no-unmodified-loop-condition': 'error',

    /**
     * Disallow ternary operators when simpler alternatives exist.
     * https://eslint.org/docs/rules/no-unneeded-ternary
     */
    'no-unneeded-ternary': 'error',

    /**
     * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
     * https://eslint.org/docs/rules/no-unreachable
     */
    'no-unreachable': 'error',

    /**
     * Disallow loops with a body that allows only one iteration.
     * https://eslint.org/docs/rules/no-unreachable-loop
     */
    'no-unreachable-loop': 'error',

    /**
     * Disallow control flow statements in `finally` blocks.
     * https://eslint.org/docs/rules/no-unsafe-finally
     */
    'no-unsafe-finally': 'error',

    /**
     * Disallow negating the left operand of relational operators.
     * https://eslint.org/docs/rules/no-unsafe-negation
     */
    'no-unsafe-negation': 'error',

    /**
     * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
     * https://eslint.org/docs/rules/no-unsafe-optional-chaining
     */
    'no-unsafe-optional-chaining': 'error',

    /**
     * Disallow unused expressions.
     * https://eslint.org/docs/rules/no-unused-expressions
     */
    'no-unused-expressions': 'off',

    /**
     * Disallow unused labels.
     * https://eslint.org/docs/rules/no-unused-labels
     */
    'no-unused-labels': 'error',

    /**
     * Disallow unused private class members.
     * https://eslint.org/docs/rules/no-unused-private-class-members
     */
    'no-unused-private-class-members': 'error',

    /**
     * Disallow unused variables.
     * https://eslint.org/docs/rules/no-unused-vars
     */
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^ignored',
      },
    ],

    /**
     * Disallow the use of variables before they are defined.
     * https://eslint.org/docs/rules/no-use-before-define
     */
    'no-use-before-define': ['error', 'nofunc'],

    /**
     * Disallow useless backreferences in regular expressions.
     * https://eslint.org/docs/rules/no-useless-backreference
     */
    'no-useless-backreference': 'error',

    /**
     * Disallow unnecessary calls to `.call()` and `.apply()`.
     * https://eslint.org/docs/rules/no-useless-call
     */
    'no-useless-call': 'error',

    /**
     * Disallow unnecessary `catch` clauses.
     * https://eslint.org/docs/rules/no-useless-catch
     */
    'no-useless-catch': 'error',

    /**
     * Disallow unnecessary computed property keys in objects and classes.
     * https://eslint.org/docs/rules/no-useless-computed-key
     */
    'no-useless-computed-key': 'error',

    /**
     * Disallow unnecessary concatenation of literals or template literals.
     * https://eslint.org/docs/rules/no-useless-concat
     */
    'no-useless-concat': 'error',

    /**
     * Disallow unnecessary constructors.
     * https://eslint.org/docs/rules/no-useless-constructor
     */
    'no-useless-constructor': 'error',

    /**
     * Disallow unnecessary escape characters.
     * https://eslint.org/docs/rules/no-useless-escape
     */
    'no-useless-escape': 'error',

    /**
     * Disallow renaming import, export, and destructured assignments to the same name.
     * https://eslint.org/docs/rules/no-useless-rename
     */
    'no-useless-rename': 'error',

    /**
     * Disallow redundant return statements.
     * https://eslint.org/docs/rules/no-useless-return
     */
    'no-useless-return': 'error',

    /**
     * Require `let` or `const` instead of `var`.
     * https://eslint.org/docs/rules/no-var
     */
    'no-var': 'error',

    /**
     * Disallow `void` operators.
     * https://eslint.org/docs/rules/no-void
     */
    'no-void': 'off',

    /**
     * Disallow specified warning terms in comments.
     * https://eslint.org/docs/rules/no-warning-comments
     */
    'no-warning-comments': [
      'error',
      {
        location: 'anywhere',
        terms: ['fixme'],
      },
    ],

    /**
     * Disallow `with` statements.
     * https://eslint.org/docs/rules/no-with
     */
    'no-with': 'error',

    /**
     * Require or disallow method and property shorthand syntax for object literals.
     * https://eslint.org/docs/rules/object-shorthand
     */
    'object-shorthand': ['error', 'properties'],

    /**
     * Enforce variables to be declared either together or separately in functions.
     * https://eslint.org/docs/rules/one-var
     */
    'one-var': [
      'error',
      {
        initialized: 'never',
        uninitialized: 'always',
      },
    ],

    /**
     * Require or disallow assignment operator shorthand where possible.
     * https://eslint.org/docs/rules/operator-assignment
     */
    'operator-assignment': 'off',

    /**
     * Require or disallow padding lines between statements.
     * https://eslint.org/docs/rules/padding-line-between-statements
     */
    'padding-line-between-statements': 'off',

    /**
     * Require using arrow functions for callbacks.
     * https://eslint.org/docs/rules/prefer-arrow-callback
     */
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true,
      },
    ],

    /**
     * Require `const` declarations for variables that are never reassigned after declared.
     * https://eslint.org/docs/rules/prefer-const
     */
    'prefer-const': 'error',

    /**
     * Require destructuring from arrays and/or objects.
     * https://eslint.org/docs/rules/prefer-destructuring
     */
    'prefer-destructuring': 'off',

    /**
     * Disallow the use of `Math.pow` in favor of the `**` operator.
     * https://eslint.org/docs/rules/prefer-exponentiation-operator
     */
    'prefer-exponentiation-operator': 'warn',

    /**
     * Enforce using named capture group in regular expression.
     * https://eslint.org/docs/rules/prefer-named-capture-group
     */
    'prefer-named-capture-group': 'off',

    /**
     * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
     * https://eslint.org/docs/rules/prefer-numeric-literals
     */
    'prefer-numeric-literals': 'error',

    /**
     * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
     * https://eslint.org/docs/rules/prefer-object-has-own
     */
    'prefer-object-has-own': 'error',

    /**
     * Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead..
     * https://eslint.org/docs/rules/prefer-object-spread
     */
    'prefer-object-spread': 'warn',

    /**
     * Require using Error objects as Promise rejection reasons.
     * https://eslint.org/docs/rules/prefer-promise-reject-errors
     */
    'prefer-promise-reject-errors': 'off',

    /**
     * Disallow use of the `RegExp` constructor in favor of regular expression literals.
     * https://eslint.org/docs/rules/prefer-regex-literals
     */
    'prefer-regex-literals': 'off',

    /**
     * Require rest parameters instead of `arguments`.
     * https://eslint.org/docs/rules/prefer-rest-params
     */
    'prefer-rest-params': 'error',

    /**
     * Require spread operators instead of `.apply()`.
     * https://eslint.org/docs/rules/prefer-spread
     */
    'prefer-spread': 'error',

    /**
     * Require template literals instead of string concatenation.
     * https://eslint.org/docs/rules/prefer-template
     */
    'prefer-template': 'error',

    /**
     * Enforce the consistent use of the radix argument when using `parseInt()`.
     * https://eslint.org/docs/rules/radix
     */
    radix: 'error',

    /**
     * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
     * https://eslint.org/docs/rules/require-atomic-updates
     */
    'require-atomic-updates': 'off',

    /**
     * Disallow async functions which have no `await` expression.
     * https://eslint.org/docs/rules/require-await
     */
    'require-await': 'warn',

    /**
     * Enforce the use of `u` flag on RegExp.
     * https://eslint.org/docs/rules/require-unicode-regexp
     */
    'require-unicode-regexp': 'off',

    /**
     * Require generator functions to contain `yield`.
     * https://eslint.org/docs/rules/require-yield
     */
    'require-yield': 'error',

    /**
     * Enforce sorted import declarations within modules.
     * https://eslint.org/docs/rules/sort-imports
     */
    'sort-imports': 'off',

    /**
     * Require object keys to be sorted.
     * https://eslint.org/docs/rules/sort-keys
     */
    'sort-keys': 'off',

    /**
     * Require variables within the same declaration block to be sorted.
     * https://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': 'off',

    /**
     * Enforce consistent spacing after the `//` or `/*` in a comment.
     * https://eslint.org/docs/rules/spaced-comment
     */
    'spaced-comment': 'off',

    /**
     * Require or disallow strict mode directives.
     * https://eslint.org/docs/rules/strict
     */
    strict: 'error',

    /**
     * Require symbol descriptions.
     * https://eslint.org/docs/rules/symbol-description
     */
    'symbol-description': 'error',

    /**
     * Require calls to `isNaN()` when checking for `NaN`.
     * https://eslint.org/docs/rules/use-isnan
     */
    'use-isnan': 'error',

    /**
     * Enforce comparing `typeof` expressions against valid strings.
     * https://eslint.org/docs/rules/valid-typeof
     */
    'valid-typeof': 'error',

    /**
     * Require `var` declarations be placed at the top of their containing scope.
     * https://eslint.org/docs/rules/vars-on-top
     */
    'vars-on-top': 'error',

    /**
     * Require or disallow "Yoda" conditions.
     * https://eslint.org/docs/rules/yoda
     */
    yoda: 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        project: tsConfig,
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        /**
         * Disable rules covered by TypeScript errors.
         */
        'constructor-super': 'off', // ts(2335) & ts(2377)
        'getter-return': 'off', // ts(2378)
        'no-const-assign': 'off', // ts(2588)
        'no-dupe-args': 'off', // ts(2300)
        'no-dupe-keys': 'off', // ts(1117)
        'no-func-assign': 'off', // ts(2539)
        'no-import-assign': 'off', // ts(2539) & ts(2540)
        'no-new-symbol': 'off', // ts(2588)
        'no-obj-calls': 'off', // ts(2349)
        'no-setter-return': 'off', // ts(2408)
        'no-this-before-super': 'off', // ts(2376)
        'no-undef': 'off', // ts(2304)
        'no-unreachable': 'off', // ts(7027)
        'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
        'valid-typeof': 'off', // ts(2367)

        /**
         * Disable rules for which an extension rule exists.
         */
        'default-param-last': 'off',
        'dot-notation': 'off',
        'init-declarations': 'off',
        'lines-between-class-members': 'off',
        'no-array-constructor': 'off',
        'no-dupe-class-members': 'off',
        'no-duplicate-imports': 'off',
        'no-empty-function': 'off',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-loop-func': 'off',
        'no-loss-of-precision': 'off',
        'no-magic-numbers': 'off',
        'no-redeclare': 'off',
        'no-restricted-imports': 'off',
        'no-return-await': 'off',
        'no-shadow': 'off',
        'no-throw-literal': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'padding-line-between-statements': 'off',
        'require-await': 'off',

        /**
         * Require that member overloads be consecutive.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
         */
        '@typescript-eslint/adjacent-overload-signatures': 'error',

        /**
         * Requires using either `T[]` or `Array<T>` for arrays.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/array-type.md
         */
        '@typescript-eslint/array-type': 'off',

        /**
         * Disallows awaiting a value that is not a Thenable.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/await-thenable.md
         */
        '@typescript-eslint/await-thenable': 'error',

        /**
         * Bans `@ts-<directive>` comments from being used or requires descriptions after directive.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-ts-comment.md
         */
        '@typescript-eslint/ban-ts-comment': 'error',

        /**
         * Bans `// tslint:<rule-flag>` comments from being used.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
         */
        '@typescript-eslint/ban-tslint-comment': 'error',

        /**
         * Bans specific types from being used.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md
         */
        '@typescript-eslint/ban-types': 'off',

        /**
         * Ensures that literals on classes are exposed in a consistent style.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/class-literal-property-style.md
         */
        '@typescript-eslint/class-literal-property-style': 'off',

        /**
         * Enforce or disallow the use of the record type.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
         */
        '@typescript-eslint/consistent-indexed-object-style': 'off',

        /**
         * Enforces consistent usage of type assertions.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
         */
        '@typescript-eslint/consistent-type-assertions': 'off',

        /**
         * Consistent with type definition either `interface` or `type`.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
         */
        '@typescript-eslint/consistent-type-definitions': 'off',

        /**
         * Enforces consistent usage of type exports.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-exports.md
         */
        '@typescript-eslint/consistent-type-exports': 'off',

        /**
         * Enforces consistent usage of type imports.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md
         */
        '@typescript-eslint/consistent-type-imports': 'off',

        /**
         * Enforce default parameters to be last.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/default-param-last.md
         */

        '@typescript-eslint/default-param-last': 'error',

        /**
         * Enforce dot notation whenever possible.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/dot-notation.md
         */
        '@typescript-eslint/dot-notation': 'error',

        /**
         * Require explicit return types on functions and class methods.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
         */
        '@typescript-eslint/explicit-function-return-type': 'off',

        /**
         * Require explicit accessibility modifiers on class properties and methods.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
         */
        '@typescript-eslint/explicit-member-accessibility': 'off',

        /**
         * Require explicit return and argument types on exported functions' and classes' public class methods.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
         */
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        /**
         * Require or disallow initialization in variable declarations.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/init-declarations.md
         */
        '@typescript-eslint/init-declarations': 'off',

        /**
         * Require or disallow an empty line between class members.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/lines-between-class-members.md
         */
        '@typescript-eslint/lines-between-class-members': 'off',

        /**
         * Require a specific member delimiter style for interfaces and type literals.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-delimiter-style.md
         */
        '@typescript-eslint/member-delimiter-style': 'off',

        /**
         * Require a consistent member declaration order.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/member-ordering.md
         */
        '@typescript-eslint/member-ordering': 'off',

        /**
         * Enforces using a particular method signature syntax.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/method-signature-style.md
         */
        '@typescript-eslint/method-signature-style': 'off',

        /**
         * Enforces naming conventions for everything across a codebase.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
         */
        '@typescript-eslint/naming-convention': 'off',

        /**
         * Disallow generic `Array` constructors.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-array-constructor.md
         */
        '@typescript-eslint/no-array-constructor': 'error',

        /**
         * Requires that `.toString()` is only called on objects which provide useful information when stringified.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-base-to-string.md
         */
        '@typescript-eslint/no-base-to-string': 'warn',

        /**
         * Disallow non-null assertion in locations that may be confusing.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 'off',

        /**
         * Requires expressions of type void to appear in statement position.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
         */
        '@typescript-eslint/no-confusing-void-expression': 'error',

        /**
         * Disallow duplicate class members.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
         */
        '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

        /**
         * Disallow duplicate imports.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-duplicate-imports.md
         */
        '@typescript-eslint/no-duplicate-imports': 'error',

        /**
         * Disallow the delete operator with computed key expressions.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
         */
        '@typescript-eslint/no-dynamic-delete': 'error',

        /**
         * Disallow empty functions.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-function.md
         */
        '@typescript-eslint/no-empty-function': 'warn',

        /**
         * Disallow the declaration of empty interfaces.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-empty-interface.md
         */
        '@typescript-eslint/no-empty-interface': 'error',

        /**
         * Disallow usage of the `any` type.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-explicit-any.md
         */
        '@typescript-eslint/no-explicit-any': 'error',

        /**
         * Disallow extra non-null assertion.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
         */
        '@typescript-eslint/no-extra-non-null-assertion': 'error',

        /**
         * Forbids the use of classes as namespaces.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-extraneous-class.md
         */
        '@typescript-eslint/no-extraneous-class': 'error',

        /**
         * Requires Promise-like values to be handled appropriately.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-floating-promises.md
         */
        '@typescript-eslint/no-floating-promises': 'warn',

        /**
         * Disallow iterating over an array with a for-in loop.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-for-in-array.md
         */
        '@typescript-eslint/no-for-in-array': 'error',

        /**
         * Disallow usage of the implicit `any` type in catch clauses.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
         */
        '@typescript-eslint/no-implicit-any-catch': 'warn',

        /**
         * Disallow the use of `eval()`-like methods.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-implied-eval.md
         */
        '@typescript-eslint/no-implied-eval': 'error',

        /**
         * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-inferrable-types.md
         */
        '@typescript-eslint/no-inferrable-types': 'off',

        /**
         * Disallow `this` keywords outside of classes or class-like objects.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-this.md
         */
        '@typescript-eslint/no-invalid-this': 'error',

        /**
         * Disallows usage of `void` type outside of generic or return types.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
         */
        '@typescript-eslint/no-invalid-void-type': 'warn',

        /**
         * Disallow function declarations that contain unsafe references inside loop statements.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loop-func.md
         */
        '@typescript-eslint/no-loop-func': 'error',

        /**
         * Disallow literal numbers that lose precision.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
         */
        '@typescript-eslint/no-loss-of-precision': 'error',

        /**
         * Disallow magic numbers.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-magic-numbers.md
         */
        '@typescript-eslint/no-magic-numbers': 'off',

        /**
         * Disallow the `void` operator except when used to discard a value.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-meaningless-void-operator.md
         */
        '@typescript-eslint/no-meaningless-void-operator': 'off',

        /**
         * Enforce valid definition of `new` and `constructor`.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-new.md
         */
        '@typescript-eslint/no-misused-new': 'error',

        /**
         * Avoid using promises in places not designed to handle them.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-misused-promises.md
         */
        '@typescript-eslint/no-misused-promises': [
          'warn',
          {
            checksVoidReturn: false,
          },
        ],

        /**
         * Disallow the use of custom TypeScript modules and namespaces.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-namespace.md
         */
        '@typescript-eslint/no-namespace': 'error',

        /**
         * Disallows using a non-null assertion in the left operand of the nullish coalescing operator.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-nullish-coalescing.md
         */
        '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',

        /**
         * Disallows using a non-null assertion after an optional chain expression.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

        /**
         * Disallows non-null assertions using the `!` postfix operator.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
         */
        '@typescript-eslint/no-non-null-assertion': 'error',

        /**
         * Disallow the use of parameter properties in class constructors.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-parameter-properties.md
         */
        '@typescript-eslint/no-parameter-properties': 'off',

        /**
         * Disallow variable redeclaration.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-redeclare.md
         */
        '@typescript-eslint/no-redeclare': 'off', // ts(2451)

        /**
         * Disallows invocation of `require()`.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-require-imports.md
         */
        '@typescript-eslint/no-require-imports': 'warn',

        /**
         * Disallow specified modules when loaded by import.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-restricted-imports.md
         */
        '@typescript-eslint/no-restricted-imports': 'off',

        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-shadow.md
         */
        '@typescript-eslint/no-shadow': 'error',

        /**
         * Disallow aliasing `this`.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-this-alias.md
         */
        '@typescript-eslint/no-this-alias': 'error',

        /**
         * Disallow throwing literals as exceptions.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-throw-literal.md
         */
        '@typescript-eslint/no-throw-literal': 'error',

        /**
         * Disallow the use of type aliases.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-type-alias.md
         */
        '@typescript-eslint/no-type-alias': 'off',

        /**
         * Flags unnecessary equality comparisons against boolean literals.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',

        /**
         * Prevents conditionals where the type is always truthy or always falsy.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
         */
        '@typescript-eslint/no-unnecessary-condition': 'error',

        /**
         * Warns when a namespace qualifier is unnecessary.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
         */
        '@typescript-eslint/no-unnecessary-qualifier': 'warn',

        /**
         * Enforces that type arguments will not be used if not required.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 'off',

        /**
         * Warns if a type assertion does not change the type of an expression.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',

        /**
         * Disallows unnecessary constraints on generic types.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
         */
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',

        /**
         * Disallows calling a function with an any type value.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-argument.md
         */
        '@typescript-eslint/no-unsafe-argument': 'error',

        /**
         * Disallows assigning any to variables and properties.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
         */
        '@typescript-eslint/no-unsafe-assignment': 'warn',

        /**
         * Disallows calling an any type value.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-call.md
         */
        '@typescript-eslint/no-unsafe-call': 'warn',

        /**
         * Disallows member access on any typed variables.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
         */
        '@typescript-eslint/no-unsafe-member-access': 'warn',

        /**
         * Disallows returning any from a function.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unsafe-return.md
         */
        '@typescript-eslint/no-unsafe-return': 'warn',

        /**
         * Disallow the use of variables before they are defined.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-use-before-define.md
         */
        '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

        /**
         * Disallow unused expressions.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-expressions.md
         */
        '@typescript-eslint/no-unused-expressions': 'off',

        /**
         * Disallow unused variables.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-unused-vars.md
         */
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'after-used',
            argsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            varsIgnorePattern: '^ignored',
          },
        ],

        /**
         * Disallow unnecessary constructors.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-useless-constructor.md
         */
        '@typescript-eslint/no-useless-constructor': 'error',

        /**
         * Disallows the use of require statements except in import statements.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/no-var-requires.md
         */
        '@typescript-eslint/no-var-requires': 'error',

        /**
         * Prefers a non-null assertion over explicit type cast when possible.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',

        /**
         * Require or disallow padding lines between statements.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/padding-line-between-statements.md
         */
        '@typescript-eslint/padding-line-between-statements': 'off',

        /**
         * Prefer usage of `as const` over literal type.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-as-const.md
         */
        '@typescript-eslint/prefer-as-const': 'error',

        /**
         * Prefer initializing each enums member value.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
         */
        '@typescript-eslint/prefer-enum-initializers': 'error',

        /**
         * Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-for-of.md
         */
        '@typescript-eslint/prefer-for-of': 'off',

        /**
         * Use function types instead of interfaces with call signatures.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-function-type.md
         */
        '@typescript-eslint/prefer-function-type': 'off',

        /**
         * Enforce `includes` method over `indexOf` method.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-includes.md
         */
        '@typescript-eslint/prefer-includes': 'error',

        /**
         * Require that all enum members be literal values to prevent unintended enum member name shadow issues.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
         */
        '@typescript-eslint/prefer-literal-enum-member': 'error',

        /**
         * Require the use of the `namespace` keyword instead of the `module` keyword to declare custom TypeScript modules.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
         */
        '@typescript-eslint/prefer-namespace-keyword': 'error',

        /**
         * Enforce the usage of the nullish coalescing operator instead of logical chaining.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
         */
        '@typescript-eslint/prefer-nullish-coalescing': 'error',

        /**
         * Prefer using concise optional chain expressions instead of chained logical ands.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
         */
        '@typescript-eslint/prefer-optional-chain': 'error',

        /**
         * Requires that private members are marked as `readonly` if they're never modified outside of the constructor.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly.md
         */
        '@typescript-eslint/prefer-readonly': 'off',

        /**
         * Requires that function parameters are typed as readonly to prevent accidental mutation of inputs.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',

        /**
         * Prefer using type parameter when calling `Array#reduce` instead of casting.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 'warn',

        /**
         * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',

        /**
         * Enforce that `this` is used when only `this` type is returned.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-return-this-type.md
         */
        '@typescript-eslint/prefer-return-this-type': 'off',

        /**
         * Enforce the use of `String#startsWith` and `String#endsWith` instead of other equivalent methods of checking substrings.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',

        /**
         * Recommends using `@ts-expect-error` over `@ts-ignore`.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
         */
        '@typescript-eslint/prefer-ts-expect-error': 'error',

        /**
         * Requires any function or method that returns a Promise to be marked async.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/promise-function-async.md
         */
        '@typescript-eslint/promise-function-async': 'off',

        /**
         * Requires `Array#sort` calls to always provide a `compareFunction`.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
         */
        '@typescript-eslint/require-array-sort-compare': 'off',

        /**
         * Disallow async functions which have no `await` expression.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/require-await.md
         */
        '@typescript-eslint/require-await': 'warn',

        /**
         * When adding two variables, operands must both be of type number or of type string.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
         */
        '@typescript-eslint/restrict-plus-operands': 'error',

        /**
         * Enforce template literal expressions to be of string type.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
         */
        '@typescript-eslint/restrict-template-expressions': 'error',

        /**
         * Enforces consistent returning of awaited values.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/return-await.md
         */
        '@typescript-eslint/return-await': 'error',

        /**
         * Enforces that members of a type union/intersection are sorted alphabetically.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
         */
        '@typescript-eslint/sort-type-union-intersection-members': 'off',

        /**
         * Restricts the types allowed in boolean expressions.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
         */
        '@typescript-eslint/strict-boolean-expressions': 'off',

        /**
         * Exhaustiveness checking in switch with union type.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
         */
        '@typescript-eslint/switch-exhaustiveness-check': 'error',

        /**
         * Sets preference level for triple slash directives versus ES6-style import declarations.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/triple-slash-reference.md
         */
        '@typescript-eslint/triple-slash-reference': 'error',

        /**
         * Requires type annotations to exist.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/typedef.md
         */
        '@typescript-eslint/typedef': 'off',

        /**
         * Enforces unbound methods are called with their expected scope.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unbound-method.md
         */
        '@typescript-eslint/unbound-method': 'error',

        /**
         * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
         * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/unified-signatures.md
         */
        '@typescript-eslint/unified-signatures': 'warn',
      },
    },
  ],
}
