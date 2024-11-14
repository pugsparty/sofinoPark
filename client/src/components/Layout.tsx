import React from 'react';
import NavBar from './UI/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './UI/Footer';

export default function Layout(): React.JSX.Element {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
