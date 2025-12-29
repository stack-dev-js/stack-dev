import { FileGeneratorImp } from '../../../file-generator/file-generator-imp';

const MAIN = `import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
`;

export const MAIN_FILE_GENERATOR = new FileGeneratorImp('src/main.tsx', MAIN);
