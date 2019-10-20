/*
 * Notice: We should have a lot of disabled TS rules because of the original of the file is a JS file
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const makePathAliasSafe = pathAlias => ({
  alias: pathAlias.alias.replace(/(\/\*$)/g, ''),
  path:  pathAlias.path.replace(/(\/\*$|^\.\/)/g, ''),
});

/**
 * @param isSafe look to the {@link makePathAliasSafe}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getTsConfigPaths = (isSafe = true) => {
  // eslint-disable-next-line global-require
  const options = require('../tsconfig.json').compilerOptions;

  const unsafe = Object
      .keys(options.paths)
      .map((alias) => {
        const targets = options.paths[alias];
        if (!(targets instanceof Array)) {
        // eslint-disable-next-line no-console
          console.error('Alias: %s, Targets: ', alias, targets);
          throw new Error('Invalid targets');
        }

        return targets.map(targetPath => ({ alias, path: targetPath }));
      })
      .reduce((allAliases, aliases) => [...allAliases, ...aliases], []);

  return !isSafe ? unsafe : unsafe.map(makePathAliasSafe);
};

module.exports = { getTsConfigPaths };
