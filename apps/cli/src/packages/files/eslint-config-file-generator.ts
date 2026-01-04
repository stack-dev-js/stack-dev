import { FileGenerator } from '../../file-generator';
import { FileGeneratorImp } from '../../file-generator/file-generator-imp';

export function makeEslintConfigGenerator(
  filepath: string,
  namespace: string,
): FileGenerator {
  const ESLINT_CONFIG = `import base from '${namespace}/eslint-config/base.mjs';

export default [...base, { ignores: ['**/dist/**'] }];
`;

  return new FileGeneratorImp(filepath, ESLINT_CONFIG);
}

export function makeReactEslintConfigGenerator(
  filepath: string,
  namespace: string,
): FileGenerator {
  const ESLINT_CONFIG = `import base from '${namespace}/eslint-config/base.mjs';
import react from '${namespace}/eslint-config/react.mjs';

export default [
  ...base,
  ...react,
  { 
    ignores: ['**/dist/**', '**/coverage/**'] 
  }
];
`;

  return new FileGeneratorImp(filepath, ESLINT_CONFIG);
}
