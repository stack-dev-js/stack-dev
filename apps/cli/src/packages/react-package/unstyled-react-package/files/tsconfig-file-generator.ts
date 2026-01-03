import { FileGeneratorImp } from '../../../../file-generator/file-generator-imp';

const TSCONFIG = `{
  "extends": "@stack-dev/typescript-config/tsconfig.react.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"]
}
`;

export const TSCONFIG_FILE_GENERATOR = new FileGeneratorImp(
  'tsconfig.json',
  TSCONFIG,
);
