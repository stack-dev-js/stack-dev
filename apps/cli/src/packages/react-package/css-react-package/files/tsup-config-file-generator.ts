import { FileGeneratorImp } from '../../../../file-generator/file-generator-imp';

const TSUP_CONFIG = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  clean: true,
  injectStyle: true,
  external: ['react', 'react-dom'],
});
`;

export const TSUP_CONFIG_FILE_GENERATOR = new FileGeneratorImp(
  'tsup.config.ts',
  TSUP_CONFIG,
);
