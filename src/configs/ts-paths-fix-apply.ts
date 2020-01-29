import * as path from 'path';
import * as moduleAliases from 'module-alias';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getTsConfigPaths } = require('./ts-paths-fix-helpers');

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

export const applyTsPathFix = (): void => {
  getTsConfigPaths().forEach((one: PathAlias) => {
    const absoluteTarget = path.join(__dirname, '../..', one.path);

    moduleAliases.addAlias(one.alias, absoluteTarget);
  });
};

applyTsPathFix();
