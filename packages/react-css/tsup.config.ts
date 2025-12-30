import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  minify: true,
  clean: true,
  splitting: false,
  external: ['react', 'react-dom'],
  injectStyle: true,
});
