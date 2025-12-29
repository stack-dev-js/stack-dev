import { StyleType } from '../../utils/style-type';
import { createStyledComponentsReactPackage } from './create-styled-components-react-package';
import { createTailwindReactPackage } from './create-tailwind-react-package';
import { createUnstyledReactPackage } from './create-unstyled-react-package';
import { createCssReactPackage } from './css-react-package/create-css-react-package';

export async function createReactPackage(
  name: string,
  style: StyleType,
): Promise<void> {
  switch (style) {
    case 'tailwind':
      await createTailwindReactPackage(name);
      break;
    case 'sass':
      await createCssReactPackage(name);
      break;
    case 'styled-components':
      await createStyledComponentsReactPackage(name);
      break;
    case 'none':
      await createUnstyledReactPackage(name);
      break;
  }
}
