module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
  },
  env: {
    jest: true,
  },
  plugins: [
    '@typescript-eslint',
    'unicorn',
    'filenames',
    'promise',
  ],
  extends: [
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    '@typescript-eslint/restrict-plus-operands': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*spec.ts'] },
    ],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'import/prefer-default-export': 'off',
    'filenames/match-regex': ['error', /^[0-9a-z.-]+$/, true],
    'consistent-return': 0,
    'no-unused-expressions': 0,
    'indent': [
      'warn',
      2
    ],
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
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
  }
};
