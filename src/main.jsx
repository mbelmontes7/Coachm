import React from 'react';
import * as ReactDOM from 'react-dom/client';
// import App from './App.jsx';
import './index.css';
import "@fontsource/roboto"; // Font
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Components/Navbar';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/About',
    element: <About />
  },
  // {
  //   path: '/services',
  //   element: <Services />
  // },
  // {
  //   path: '/Booking',
  //   element: <Booking />
  // }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
