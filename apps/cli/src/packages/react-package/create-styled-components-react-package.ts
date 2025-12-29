import { FileGeneratorImp } from "../../file-generator/file-generator-imp";

export async function createStyledComponentsReactPackage(
  name: string,
): Promise<void> {
  throw new Error('Not implemented.');
}

const STYLED_BUTTON = `import styled from 'styled-components';

const StyledButton = styled.button\`
  background: blue;
  color: white;
  padding: 10px;
\`;

export const SCButton = ({ label }: { label: string }) => (
  <StyledButton>{label}</StyledButton>
);
`;

export const STYLED_BUTTON_FILE_GENERATOR = new FileGeneratorImp(
  'styled-button.ts',
  STYLED_BUTTON,
);
