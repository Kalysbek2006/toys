import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from "./companet/layout/Layout.jsx";
import HomePage from "./homePage/HomePage.jsx";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Products from "./companet/products/Products.jsx";
import Card from "./companet/products/card/Card.jsx";
import Details from "./companet/details/Details.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <div>error</div>
    },
    {
        path: '/',
        element: <HomePage/>
    }, {
        path: '/details',
        element: <Details/>
    },
    {
        path:'/products',
        element:<Products/>
    },


])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
