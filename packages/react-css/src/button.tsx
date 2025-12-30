import { HTMLAttributes } from 'react';

import * as styles from './button.module.css';

console.log('Styles object:', styles);

export function Button(props: HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.styledButton} {...props}>
      {props.children}
    </button>
  );
}
