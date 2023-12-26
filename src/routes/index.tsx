import PageNotFound from '@/pages/PageNotFound';
import PublicRoutes from '@/routes/public';
import { routes as routesPublic } from '@/routes/public/config';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        {routesPublic.map((route) => (
          <Route key={route.path} element={route.element} path={route.path} />
        ))}
      </Route>
      <Route path='*' element={<PageNotFound />} />F
    </Routes>
  );
};
export default RoutesConfig;
