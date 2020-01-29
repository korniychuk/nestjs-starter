const { coverageDirectory: deleted, ...common } = require('../jest.config');

/**
 * @param {object} moduleNameMapper
 * @param {string} suffix
 * @returns {{}} paths hash-map
 */
const moduleNameMapperAddRootDirSuffix = (moduleNameMapper, suffix) => Object.keys(moduleNameMapper).reduce(
  (mapper, alias) => ({
    ...mapper,
    [alias]: moduleNameMapper[alias].replace('<rootDir>', `<rootDir>${ suffix }`),
  }),
  {},
);

module.exports = {
  ...common,
  rootDir: '..',
  roots: [
    '<rootDir>',
  ],
  testRegex: 'test/.*\\.e2e-spec\\.ts$',
  moduleNameMapper: moduleNameMapperAddRootDirSuffix(common.moduleNameMapper, '.'),
};
