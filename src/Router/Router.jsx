import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import TimeLIne from "../Componets/TimeLine/TimeLIne";
import Status from "../Componets/Status/Status";
import Home from "../Componets/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children:[
      {index: true, Component: Home
        
      },
      {
        path: "/timeline",
        Component: TimeLIne
      },
      {
        path: "/status",
        Component: Status
      },

    ]
   

  }
]);