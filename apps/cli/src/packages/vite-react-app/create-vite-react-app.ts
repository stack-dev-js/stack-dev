import path from 'path';
import { PackageJsonGenerator } from '../../file-generator';
import { Dependency, PackageJSON } from '../../package-json';
import { PackageGenerator } from '../../utils/package-generator';
import { getNamespace, getWorkspaceRoot } from '../../utils/workspace';

import { INDEX_HTML_FILE_GENERATOR } from './files/index-html-file-generator';
import { MAIN_FILE_GENERATOR } from './files/main-file-generator';
import { VITE_CONFIG_FILE_GENERATOR } from './files/vite-config-file-generator';

import { APP_FILE_GENERATOR } from './files/app-file-generator';
import { ESLINT_CONFIG_FILE_GENERATOR } from './files/eslint-config-file-generator';
import { PRETTIER_CONFIG_FILE_GENERATOR } from './files/prettier-config-file-generator';
import { TSCONFIG_FILE_GENERATOR } from './files/tsconfig-file-generator';
import { VITEST_CONFIG_FILE_GENERATOR } from './files/vitest-config-file-generator';

export async function createViteReactApp(name: string): Promise<void> {
  const rootDir = await getWorkspaceRoot();
  const directory = path.join(rootDir, 'apps', name);

  const namespace = await getNamespace(rootDir);
  const packageName = `${namespace}/${name}`;

  console.log(`🚀 Creating Vite React App: ${packageName}`);

  const generator = new PackageGenerator(
    directory,
    makeAppPackageGenerator(packageName, namespace),
    [
      VITE_CONFIG_FILE_GENERATOR,
      INDEX_HTML_FILE_GENERATOR,
      MAIN_FILE_GENERATOR,
      APP_FILE_GENERATOR,
      TSCONFIG_FILE_GENERATOR,
      PRETTIER_CONFIG_FILE_GENERATOR,
      ESLINT_CONFIG_FILE_GENERATOR,
      VITEST_CONFIG_FILE_GENERATOR,
    ],
  );

  await generator.generate();
}

function makeAppPackageGenerator(packageName: string, namespace: string) {
  const packageJsonModel = new PackageJSON({
    name: packageName,
    dependencies: [
      new Dependency('react', '^18.3.1'),
      new Dependency('react-dom', '^18.3.1'),
    ],
    devDependencies: [
      new Dependency(`${namespace}/eslint-config`, 'workspace:*'),
      new Dependency(`${namespace}/prettier-config`, 'workspace:*'),
      new Dependency(`${namespace}/typescript-config`, 'workspace:*'),
      new Dependency('@types/react', '^18.3.1'),
      new Dependency('@types/react-dom', '^18.3.1'),
      new Dependency('@vitejs/plugin-react', '^4.3.1'),
      new Dependency('vite', '^5.4.2'),
      new Dependency('typescript', '^5.5.4'),
      new Dependency('eslint', '^9.32.0'),
      new Dependency('prettier', '^3.6.2'),
    ],
    additionalData: {
      version: '0.1.0',
      private: true,
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview',
        start: 'pnpm run preview',
        lint: 'eslint .',
        format: 'prettier . --write',
      },
    },
  });

  return new PackageJsonGenerator(packageJsonModel, namespace);
}
