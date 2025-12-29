import { FileGeneratorImp } from '../../../../file-generator/file-generator-imp';

const BUTTON_CSS_MODULE = `.styledButton {
  background: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
`;

export const BUTTON_CSS_MODULE_FILE_GENERATOR = new FileGeneratorImp(
  'src/button.module.css',
  BUTTON_CSS_MODULE,
);
