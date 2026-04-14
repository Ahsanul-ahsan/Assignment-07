import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Router';
import TimeLineProvider from './Componets/Context/TimeLineProvider';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <TimeLineProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </TimeLineProvider>

  </StrictMode>,
)
