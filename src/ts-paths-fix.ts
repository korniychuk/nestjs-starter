import * as path from 'path';
import * as moduleAliases from 'module-alias';

if (!process.env.IS_TS_NODE) {
  // eslint-disable-next-line global-require
  const options = require('../tsconfig.json').compilerOptions;

  const addAlias = (alias: string, target: string) => {
    const safeAlias = alias.replace(/(\/\*$)/g, '');
    const safeTarget = target.replace(/(\/\*$|^\.\/)/g, '');
    const absoluteTarget = path.join(__dirname, safeTarget);

    moduleAliases.addAlias(safeAlias, absoluteTarget);
  };

  Object.keys(options.paths).forEach((alias: string) => {
    const targets = options.paths[alias];
    if (!(targets instanceof Array)) {
      // eslint-disable-next-line no-console
      console.error('Alias: %s, Targets: ', alias, targets);
      throw new Error('Invalid targets');
    }

    targets.forEach(target => addAlias(alias, target));
  });
}
