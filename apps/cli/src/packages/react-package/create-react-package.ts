import { StyleType } from '../../utils/style-type';
import { createTailwindReactPackage } from './create-tailwind-react-package';
import { createUnstyledReactPackage } from './create-unstyled-react-package';
import { createCssReactPackage } from './css-react-package/create-css-react-package';
import { createStyledComponentsReactPackage } from './styled-components-react-package/create-styled-components-react-package';

export async function createReactPackage(
  name: string,
  style: StyleType,
): Promise<void> {
  switch (style) {
    case 'tailwind':
      await createTailwindReactPackage(name);
      break;
    case 'css-modules':
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
