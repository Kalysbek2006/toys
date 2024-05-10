import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./companet/layout/Layout.jsx";
import HomePage from "./homePage/HomePage.jsx";
import Error from "./homePage/Error.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }
            // {
            //     path:'/',
            //     element:
            // }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
