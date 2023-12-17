import { RouterProvider } from 'react-router-dom';
import QueryProvider from '@providers/queryProvider';
import router from '../../shared/router/Router';

const RootProvider = (): JSX.Element => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

export default RootProvider;
