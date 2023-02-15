import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import About from './pages/About';
import Configurator from './pages/Configurator';
import Index from './pages/Index';
import Prices from './pages/Prices';
import TopBar from './components/TopBar';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/configurator",
    element: <Configurator/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/prices",
    element: <Prices/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopBar/>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
