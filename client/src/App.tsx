import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import AllHousesPage from './components/pages/AllHousesPage';
import MainPage from './components/pages/MainPage';
import ContactsPage from './components/pages/ContactsPage';
import AreaDescriptionPage from './components/pages/AreaDescriptionPage';
import ReadyCompanyProjects from './components/pages/ReadyCompanyProjects';
import CompanyDescriptionPage from './components/pages/CompanyDescriptionPage';
import HousePage from './components/UI/HousePage';

function App(): React.JSX.Element {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/houses',
          element: <AllHousesPage />,
        },
        {
          path: '/house/:id',
          element: <HousePage />,
        },
        {
          path: '/contacts',
          element: <ContactsPage />,
        },
        {
          path: '/area-description',
          element: <AreaDescriptionPage />,
        },
        {
          path: '/ready-company-projects',
          element: <ReadyCompanyProjects />,
        },
        {
          path: '/company-description',
          element: <CompanyDescriptionPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
