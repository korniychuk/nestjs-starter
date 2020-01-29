/*
 * Notice: We should have a lot of disabled TS rules because of the original of the file is a JS file
 */

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');


// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const makePathAliasSafe = pathAlias => ({
  alias: pathAlias.alias.replace(/(\/\*$)/g, ''),
  path:  pathAlias.path.replace(/^\.\/\*$/, '').replace(/(\/\*$|^\.\/)/g, ''),
});

/**
 * @param isSafe look to the {@link makePathAliasSafe}
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getTsConfigPaths = (isSafe = true) => {
  /**
   * Looking for `tsconfig.json`
   *
   * * for Jest we use {@link getTsConfigPaths} helper from the /configs/ts-paths-fix-helpers.js files
   *   In this case `tsconfig.json` located at `../`
   * * for the App we use {@link getTsConfigPaths} helper from the /src/configs/ts-paths-fix-helpers.ts files
   *   In this case `tsconfig.json` located at `../../`
   */
  const possibleTsConfigPaths = [
    path.join(__dirname, '..', 'tsconfig.json'),
    path.join(__dirname, '..', '..', 'tsconfig.json'),
    path.join(__dirname, '..', '..', '..', 'tsconfig.json'),
  ];
  const tsConfigPath = possibleTsConfigPaths.find(v => fs.existsSync(v));
  if (!tsConfigPath) {
    throw new Error('Can\'t find tsconfig.json');
  }
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const options = require(tsConfigPath).compilerOptions;

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
