import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '@shared/layouts/RootLayout';
import { HomePage } from '@features/home';
import { MenuPage, MenuItemPage } from '@features/menu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/menu/:id', element: <MenuItemPage /> },
    ],
  },
]);

export default router;
