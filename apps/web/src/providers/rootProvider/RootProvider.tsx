import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import router from '../../shared/router/Router';
import theme from '@shared/theme';

const RootProvider = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
};

export default RootProvider;
