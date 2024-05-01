import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./companet/layout/Layout.jsx";
import HomePage from "./homePage/HomePage.jsx";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        errorElement:<div>error</div>
    },
    {
        path:'/',
        element:<HomePage/>
    },
    // {
    //     path:'/',
    //     element:
    // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
