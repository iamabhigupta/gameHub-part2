import { createBrowserRouter } from 'react-router-dom';
import GameDetailsPage from './pages/GameDetailsPage';
import Home from './pages/Home';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'game/:id',
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default router;
