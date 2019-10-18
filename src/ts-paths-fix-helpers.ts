interface PathAlias {
  /**
   * @example: `@app` safe
   * @example: `@app/*` unsafe
   */
  alias: string;
  /**
   * @example: `app` safe
   * @example: `./app/*` unsafe
   */
  path: string;
}

const makePathAliasSafe = (pathAlias: PathAlias): PathAlias => ({
  alias: pathAlias.alias.replace(/(\/\*$)/g, ''),
  path:  pathAlias.path.replace(/(\/\*$|^\.\/)/g, ''),
});

/**
 * @param isSafe look to comments of the {@link PathAlias}
 */
export const getTsConfigPaths = (isSafe = true): PathAlias[] => {
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
