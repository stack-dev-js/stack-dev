import { FileGeneratorImp } from '../../../../file-generator/file-generator-imp';

const BUTTON = `import React from 'react';
import * as styles from './button.module.css';

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return <button className={styles.styledButton} {...props} />;
}
`;

export const BUTTON_FILE_GENERATOR = new FileGeneratorImp(
  'src/button.tsx',
  BUTTON,
);
