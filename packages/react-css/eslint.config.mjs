import base from '@stack-dev/eslint-config/base.mjs';
import react from '@stack-dev/eslint-config/react.mjs';

export default [
  ...base,
  ...react,
  { 
    ignores: ['**/dist/**', '**/coverage/**'] 
  }
];
