import { FileGeneratorImp } from '../../../../file-generator/file-generator-imp';

const BUTTON = `import React from 'react';
import styles from './button.module.css';

export function Button({ label }: { label: string }) {
  return <button className={styles.styledButton}>{label}</button>;
}
`;

export const BUTTON_FILE_GENERATOR = new FileGeneratorImp(
  'src/button.tsx',
  BUTTON,
);
