import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './root';
import ErrorPage from './error';
import About from './routes/about';
import Home from './routes/Home';
import Projects from './routes/projects';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/projects',
        element: <Projects />
      }
      
    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
