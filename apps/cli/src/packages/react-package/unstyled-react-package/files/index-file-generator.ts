import { FileGeneratorImp } from '../../../../file-generator/file-generator-imp';

const INDEX_TS = `export * from './button';
`;

export const INDEX_FILE_GENERATOR = new FileGeneratorImp(
  'src/index.ts',
  INDEX_TS,
);
