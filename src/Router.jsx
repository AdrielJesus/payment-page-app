import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouterLayout } from './common/RouterLayout';
import { Home, homePath } from './dashboard/Home';

export const AppRouter = () => (
  <Routes>
    <Route path={homePath} element={<RouterLayout />}>
      <Route path={homePath} element={<Home/>} />
      Bienvenido
    </Route>
  </Routes>
);

export default AppRouter;
