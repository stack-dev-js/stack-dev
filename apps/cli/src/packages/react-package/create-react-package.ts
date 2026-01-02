import { StyleType } from '../../utils/style-type';
import { createStyledComponentsReactPackage } from './styled-components-react-package/create-styled-components-react-package';
import { createUnstyledReactPackage } from './unstyled-react-package/create-unstyled-react-package';

export async function createReactPackage(
  name: string,
  style: StyleType,
): Promise<void> {
  switch (style) {
    case 'styled-components':
      await createStyledComponentsReactPackage(name);
      break;
    case 'none':
      await createUnstyledReactPackage(name);
      break;
  }
}
