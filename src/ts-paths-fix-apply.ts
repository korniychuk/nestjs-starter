import * as path from 'path';
import * as moduleAliases from 'module-alias';

import { getTsConfigPaths } from './ts-paths-fix-helpers';

export const applyTsPathFix = (): void => {
  if (process.env.IS_TS_NODE) return;

  getTsConfigPaths().forEach((one) => {
    const absoluteTarget = path.join(__dirname, one.path);

    moduleAliases.addAlias(one.alias, absoluteTarget);
  });
};

applyTsPathFix();
