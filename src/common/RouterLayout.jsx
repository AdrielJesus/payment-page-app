import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const RouterLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

export default RouterLayout;
