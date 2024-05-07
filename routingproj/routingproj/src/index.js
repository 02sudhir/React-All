import React from 'react';
import ReactDOM from 'react-dom/client';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Course from './pages/Course';
import Blog from './pages/Blog';

import BlogDetail from './pages/BlogDetail';


const root = ReactDOM.createRoot(document.getElementById('root'));

let AllRoute = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home />
    },
    {
      path:'about',
      element: <About />
    },
    {
      path:'courses',
      element:<Course />
    },
    {
      path:'blog',
      element:<Blog />
    },
    {
      path:'blog/:id',
      element:<BlogDetail />
    }
    
  ])
root.render(
  <React.StrictMode>
  <RouterProvider router={AllRoute} />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
