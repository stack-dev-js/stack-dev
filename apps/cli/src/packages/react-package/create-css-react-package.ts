import { PackageJsonGenerator } from '../../file-generator';
import { FileGeneratorImp } from '../../file-generator/file-generator-imp';
import { Dependency, PackageJSON } from '../../package-json';

export async function createCssReactPackage(name: string): Promise<void> {
  throw new Error('Not implemented.');
}

const STYLED_BUTTON = `import styles from './styled-button.module.css';

export function StyledButton() {
  return <button className={styles.button}>Click Me</button>
}
`;

export const STYLED_BUTTON_FILE_GENERATOR = new FileGeneratorImp(
  'styled-button.ts',
  STYLED_BUTTON,
);

const STYLED_BUTTON_CSS = `/* Button.module.css */
.button {
  background: blue;
  color: white;
  padding: 10px;
  border: none;       /* Styled-components usually defaults to no border on buttons */
  cursor: pointer;    /* Adding for better UX */
  border-radius: 4px; /* Optional: common for styled buttons */
}

.button:hover {
  filter: brightness(1.1);
}`;

export const STYLED_BUTTON_CSS_FILE_GENERATOR = new FileGeneratorImp(
  'styled-button.module.css.ts',
  STYLED_BUTTON_CSS,
);

function makePackageGenerator(packageName: string, namespace: string) {
  const packageJsonModel = new PackageJSON({
    name: packageName,
    devDependencies: [
      new Dependency(`${namespace}/eslint-config`, 'workspace:*'),
      new Dependency(`${namespace}/prettier-config`, 'workspace:*'),
      new Dependency(`${namespace}/typescript-config`, 'workspace:*'),
      new Dependency('eslint', '^9.32.0'),
      new Dependency('prettier', '^3.6.2'),
      new Dependency('prettier-plugin-organize-imports', '^4.2.0'),
      new Dependency('tsup', '^7.3.0'),
      new Dependency('vitest', '^3.2.4'),
      new Dependency('@vitest/coverage-v8', '^3.2.4'),
    ],
    additionalData: {
      version: '0.1.0',
      private: true,
      main: 'dist/index.js',
      module: 'dist/index.mjs',
      types: 'dist/index.d.ts',
      exports: {
        '.': {
          import: './dist/index.mjs',
          require: './dist/index.js',
          types: './dist/index.d.ts',
        },
        './index.css': './dist/index.css',
      },
      scripts: {
        build: 'tsup',
        lint: 'eslint',
        format: 'prettier . --write',
        test: 'vitest run',
        'test:watch': 'vitest',
      },
      sideEffects: false,
    },
  });

  return new PackageJsonGenerator(packageJsonModel, namespace);
}
