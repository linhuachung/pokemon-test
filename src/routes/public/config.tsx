// PrivateRoutes.tsx
import React, { lazy } from 'react';

const HomePage = lazy(() => import('@/pages/Homepage'));
const routes = [
  {
    path: '/',
    element: <HomePage />,
    titlePage: 'Home',
  },
];

export { routes };
