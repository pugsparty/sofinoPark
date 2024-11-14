import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import AllHousesPage from './components/pages/AllHousesPage';

function App(): React.JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <AllHousesPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
