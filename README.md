To enable Javascript style configuration for a npm project install the following packages:
```
npm install --save-dev eslint eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-prettier eslint-plugin-simple-import-sort prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser github:bytro/eslint-config-bytro github:bytro/prettier-config-bytro
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
