module.exports = {
    extends: ['airbnb-base', 'prettier'],
    plugins: [
        // 'import',
        'only-warn',
        // 'prettier',
    ],
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 8,
    },
    env: {
        es6: true,
        browser: true,
    },
    settings: {
        // 'import/resolver': {
        //     node: {
        //         moduleDirectory: ['hup/src/main/js', 'hup/src/main', 'node_modules'],
        //     },
        // },
    },
    rules: {
        'global-require': 'off',
        'no-console': 'off',
        'no-continue': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
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
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        'sort-imports': [
            'error',
            {
                'ignoreCase': false,
                'ignoreDeclarationSort': true,
                'ignoreMemberSort': false,
                'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple'],
            },
        ],
        'import/no-default-export': ['error'],
        'import/no-unresolved': 'off',
        // 'import/no-unresolved': [
        //     'error',
        //     {
        //         commonjs: true,
        //         amd: true,
        //     },
        // ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'import/prefer-default-export': 'off',
        // 'prettier/prettier': ['error'],
    },
};
