import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import Root from './routes/Root.jsx';
import './index.css'
//import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProduectEnquiryForm from './Components/ProduectEnquiryForm.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Components/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
   //element: <Root />,
    errorElement:<ErrorPage />,
     children:[
      {path:`/`,element:<ProduectEnquiryForm />},
      
     ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
