import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@shared/layouts/RootLayout';
import { HomePage } from '@features/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
