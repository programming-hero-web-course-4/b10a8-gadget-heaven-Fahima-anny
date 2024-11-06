import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Compo/Root';
import Home from './Compo/Home';
import Statistics from './Compo/Statistics';
import Dashboard from './Compo/Dashboard';
import ErrorPage from './Compo/ErrorPage';
import GadgetCards from './Compo/GadgetCards';
import GadgetsSection from './Compo/GadgetsSection';
import ProductCard from './Compo/ProductCard';
import ProductDetails from './Compo/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Review from './Compo/Review';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement:  <ErrorPage></ErrorPage> ,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader:() => fetch('../categories.json'),
        children: [
        {  path: '/' ,
          element: <GadgetCards></GadgetCards>,
          loader: () => fetch('../products.json')
        },
        {  path: '/category/:category' ,
          element: <GadgetCards></GadgetCards>,
          loader: () => fetch('../products.json')
        },
        
        ]
      },
      {
        path:'/statistics',
        element: <Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path:'/review',
        element: <Review></Review>,
        loader: () => fetch('customers.json')
      },
      {
        path: '/ProductDetails/:id' ,
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('../products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer 
    position="top-center"
    autoClose={1000}
    />
    <RouterProvider router={router} />
    </StrictMode>,
)
