module.exports = {
    extends: [
        'airbnb-typescript/base',
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
        'lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],
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
        'no-underscore-dangle': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
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
        'prettier/prettier': 'warn',
        'simple-import-sort/sort': [
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
        '@typescript-eslint/no-implied-eval': 'off',
        'no-implied-eval': 'error',
        '@typescript-eslint/no-throw-literal': 'off',
        'no-throw-literal': 'error',
    },
};
