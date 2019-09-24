To enable Javascript style configuration for a npm project install the following packages:
```
npm install --save-dev eslint babel-eslint eslint-plugin-import eslint-plugin-only-warn eslint-plugin-prettier prettier github:bytro/eslint-config-bytro github:bytro/prettier-config-bytro
```

Create `.eslintrc.js` in the project root with the following content:
```
module.exports = {
    extends: 'bytro',
};
```

Create `.prettierrc.js` in the project root with the following content:
```
module.exports = require('prettier-config-bytro');
```
