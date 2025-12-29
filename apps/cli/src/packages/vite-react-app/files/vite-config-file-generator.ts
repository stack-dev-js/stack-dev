import { FileGeneratorImp } from '../../../file-generator/file-generator-imp';

const VITE_CONFIG = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
`;

export const VITE_CONFIG_FILE_GENERATOR = new FileGeneratorImp(
  'vite.config.ts',
  VITE_CONFIG,
);
