import React from 'react';
import NavBar from './UI/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout(): React.JSX.Element {
  return (
    // <div>Layout</div>
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
