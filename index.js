module.exports = {
    extends: ['airbnb-base', 'prettier', 'plugin:import/errors', 'plugin:import/warnings'],
    plugins: ['prettier', 'simple-import-sort'],
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        es2020: true,
        browser: true,
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
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
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
                    ['^(config|engine|external|hup|interfaces|model|modules|render|uber|ui|utils|view_models|vue)(/.*|$)'],
                    // internal root modules
                    ['^[A-Z]'],
                    // internal client
                    ['^(app|config_env|config_title|game)$'],
                    // internal assets
                    ['^(images|shaders|templates)(/.*|$)'],
                ],
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
            extends: [
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:import/typescript',
            ],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-inferrable-types': 'off',
            },
        },
    ],
};
