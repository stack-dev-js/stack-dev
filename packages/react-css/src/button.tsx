import React from 'react';
import styles from './button.module.css';

export function Button({ label }: { label: string }) {
  return <button className={styles.styledButton}>{label}</button>;
}
