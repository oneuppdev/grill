import { RouterProvider } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import router from '../../shared/router/Router';
import theme from '@shared/theme';

const RootProvider = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default RootProvider;
