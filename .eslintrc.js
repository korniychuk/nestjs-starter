module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    es6: true,
  },
  plugins: [
    'unicorn',
    'filenames',
    'promise',
  ],
  extends: [
    'airbnb-base',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*spec.ts'] },
    ],
    'import/prefer-default-export': 'off',
    'filenames/match-regex': ['error', /^[0-9a-z.-]+$/, true],
    'consistent-return': 0,
    'no-unused-expressions': 0,
    'indent': ['warn', 2, {
      ObjectExpression: 'first',
      CallExpression: { arguments: 'first' },
      FunctionDeclaration: { parameters: 'first' },
      ArrayExpression: 'first',
      MemberExpression: 2,
      SwitchCase: 1,
      ignoredNodes: ['ConditionalExpression'],
    }],
    'no-console': 'error',
    'no-return-await': 'error',
    'promise/catch-or-return': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'max-params': [1, 5],
    'max-depth': ['error', 4],
    'max-len': ['error', 120, 2, {
      'ignoreUrls': true,
      'ignoreComments': true,
      'ignoreRegExpLiterals': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'class-methods-use-this': 'off',
    'no-floating-decimal': 'off',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum'
    }],
    'padded-blocks': ['error', {
      switches: 'never',
    }, {
      allowSingleLineBlocks: true
    }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-plusplus': 'off',
    'for-direction': 'off',
    'no-nested-ternary': 'off',
    "object-curly-newline": ["error", {
      "ImportDeclaration": { "multiline": true },
      "ExportDeclaration": { "multiline": true }
    }],
    'operator-linebreak': ['error', 'before', {
      overrides: { ':': 'ignore' },
    }],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: true,
      allowAllPropertiesOnSameLine: true,
    }],
    'no-mixed-operators': 'off',
    'strict': 'off',
    'template-curly-spacing': ['error', 'always'],
  },
};
