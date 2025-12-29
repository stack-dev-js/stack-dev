import { FileGeneratorImp } from '../../../file-generator/file-generator-imp';

const INDEX_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + Stack-Dev</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;

export const INDEX_HTML_FILE_GENERATOR = new FileGeneratorImp(
  'index.html',
  INDEX_HTML,
);
