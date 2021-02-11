module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:jsdoc/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    plugins: [
        'prettier',
        'simple-import-sort',
    ],
    env: {
        es2020: true,
    },
    rules: {
        'class-methods-use-this': 'off',
        'global-require': 'off',
        '@typescript-eslint/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
        'max-classes-per-file': ['warn', 2],
        'no-console': 'off',
        'no-continue': 'off',
        'no-lonely-if': 'off',
        'no-multiple-empty-lines': ['warn', { max: 1 }],
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'off',
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'lodash',
                        message:
                            'Please import specific lodash functions one by one (e.g. "import merge from \'lodash/merge\'").',
                    },
                ],
                patterns: [
                    'lodash/*',
                    '!lodash/cloneDeep',
                    '!lodash/cloneDeepWith',
                    '!lodash/isEmpty',
                    '!lodash/merge',
                ],
            },
        ],
        'no-restricted-syntax': [
            'error',
            {
                selector: 'LabeledStatement',
                message:
                    'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message:
                    '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', ignoreRestSiblings: true }],
        'prefer-destructuring': ['error', { object: true, array: false }],
        'sort-imports': 'off',

        'import/no-default-export': ['error'],
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'import/order': 'off',
        'import/prefer-default-export': 'off',

        'jsdoc/check-access': 'warn',
        'jsdoc/check-tag-names': ['warn', { definedTags: ['moduleConfig'] }],
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-description': 'off',
        'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
        'jsdoc/require-jsdoc': ['warn', {
            publicOnly: false,
            require: {
                ArrowFunctionExpression: false,
                ClassDeclaration: false,
                ClassExpression: false,
                FunctionDeclaration: true,
                FunctionExpression: false,
                MethodDefinition: true,
            },
            exemptEmptyFunctions: true,
        }],
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-returns-description': 'off',

        'prettier/prettier': 'warn',

        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    // side effect imports
                    ['^\\u0000'],
                    // packages
                    ['^@?[a-z]'],
                    // absolute imports
                    ['^[^.]'],
                    // relative imports
                    ['^\\.'],
                    // internal modules
                    ['^(config|engine|external|hup|interfaces|model|modules|render|types|uber|ui|utils|view_models|vue)(/.*|$)'],
                    // internal root modules
                    ['^[A-Z]'],
                    // internal client
                    ['^(app|config_env|config_title|game)$'],
                    // internal assets
                    ['^(images|shaders|templates)(/.*|$)'],
                ],
            },
        ],

        // Disable rules that require type checking and enable base rules.
        // Enabling type information by specifying 'parserOptions.project' requires the whole
        // project to be build before linting. Currently too slow for large code bases.
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-unnecessary-boolean-literal-compare	Flags': 'off',
        '@typescript-eslint/no-unnecessary-condition	Prevents': 'off',
        '@typescript-eslint/no-unnecessary-qualifier	Warns': 'off',
        '@typescript-eslint/no-unnecessary-type-arguments	Enforces': 'off',
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment	Disallows': 'off',
        '@typescript-eslint/no-unsafe-call	Disallows': 'off',
        '@typescript-eslint/no-unsafe-member-access	Disallows': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/prefer-includes': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/prefer-readonly	Requires': 'off',
        '@typescript-eslint/prefer-readonly-parameter-types	Requires': 'off',
        '@typescript-eslint/prefer-reduce-type-parameter	Prefer': 'off',
        '@typescript-eslint/prefer-regexp-exec	Enforce': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'off',
        '@typescript-eslint/promise-function-async	Requires': 'off',
        '@typescript-eslint/require-array-sort-compare	Requires': 'off',
        '@typescript-eslint/restrict-plus-operands	When': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions	Restricts': 'off',
        '@typescript-eslint/switch-exhaustiveness-check': 'off',
        '@typescript-eslint/unbound-method': 'off',
        // extension rules
        '@typescript-eslint/dot-notation': 'off',
        'dot-notation': ['error', { allowKeywords: true }],
        '@typescript-eslint/no-implied-eval': 'off',
        'no-implied-eval': 'error',
        '@typescript-eslint/no-throw-literal': 'off',
        'no-throw-literal': 'error',
        '@typescript-eslint/require-await': 'off',
        'require-await': 'error',
        '@typescript-eslint/return-await': 'off',
        'no-return-await': 'error',

        // use T[] over Array<T>
        '@typescript-eslint/array-type': ['warn', { default: 'array' }],
    },
    settings: {
        jsdoc: {
            preferredTypes: {
                'Array<>': '[]',
                'Array.<>': '[]',
            },
        },
    },
    overrides: [
        {
            files: ['**/*.ts'],
            settings: {
                jsdoc: {
                    mode: 'typescript',
                },
            },
            rules: {
                'jsdoc/no-types': 'warn',
                'jsdoc/require-jsdoc': ['warn', {
                    publicOnly: false,
                    require: {
                        ArrowFunctionExpression: false,
                        ClassDeclaration: false,
                        ClassExpression: false,
                        FunctionDeclaration: false,
                        FunctionExpression: false,
                        MethodDefinition: false,
                    },
                    exemptEmptyFunctions: true,
                }],
                'jsdoc/require-param': 'off',
                'jsdoc/require-returns': 'off',
                'jsdoc/require-param-type': 'off',
                'jsdoc/require-returns-type': 'off',
            },
        },
    ],
};
