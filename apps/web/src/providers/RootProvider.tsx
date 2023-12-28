import { RouterProvider } from 'react-router-dom';
import QueryProvider from '@providers/QueryProvider';
import router from '../shared/router/Router';

const RootProvider = (): JSX.Element => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

export default RootProvider;
