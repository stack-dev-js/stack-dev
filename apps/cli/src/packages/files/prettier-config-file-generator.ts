import { FileGenerator } from '../../file-generator';
import { FileGeneratorImp } from '../../file-generator/file-generator-imp';

export function makePrettierConfigFileGenerator(
  filepath: string,
  namespace: string,
): FileGenerator {
  const PRETTIER_CONFIG = `import base from '${namespace}/prettier-config/base.mjs';

export default base;
`;

  return new FileGeneratorImp(filepath, PRETTIER_CONFIG);
}
