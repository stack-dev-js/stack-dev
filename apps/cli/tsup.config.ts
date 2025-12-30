import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node18',
  splitting: false,
  clean: true,
  dts: true,
  banner: {
    js: '#!/usr/bin/env node',
  },
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.js',
    };
  },
});
