import path from 'node:path';
import { PackageJSON } from '../package-json';
import { PackageJsonGenerator } from '../file-generator';
import { PackageGenerator } from '../utils/package-generator';
import { getNamespace, getWorkspaceRoot } from '../utils/workspace';

export async function createConfigPackage(name: string): Promise<void> {
  const rootDir = await getWorkspaceRoot();
  const directory = path.join(rootDir, 'configs', name);

  const namespace = await getNamespace(rootDir);
  const packageName = `${namespace}/${name}`;

  const packageJsonModel = new PackageJSON({
    name: packageName,
    additionalData: {
      version: '0.1.0',
      private: true,
    },
  });

  const generator = new PackageGenerator(
    directory,
    new PackageJsonGenerator(packageJsonModel, namespace),
    [],
  );

  await generator.generate();
}