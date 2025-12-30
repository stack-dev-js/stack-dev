import { FileGeneratorImp } from '../../../file-generator/file-generator-imp';

const TSUP_CONFIG = `import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'esnext',
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.js',
    };
  },
});
`;

export const TSUP_CONFIG_FILE_GENERATOR = new FileGeneratorImp(
  'tsup.config.ts',
  TSUP_CONFIG,
);
