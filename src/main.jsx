import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from "./homePage/HomePage.jsx";
import Error from "./homePage/Error.jsx";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Products from "./companet/products/Products.jsx";
import Details from "./companet/details/Details.jsx";
import Layout from "./companet/layout/Layout.jsx";
import ReviewsPage from './reviewsPage/ReviewsPage.jsx';
import DeliveryPage from './deliveryPage/DeliveryPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <Error/>,
        children:[
            {
                path: '/',
                element:<HomePage/>
            }, {
                path: '/details',
                element: <Details/>
            },
            {
                path:'/products',
                element:<Products/>
            },
            {
                path:"/reviews",
                element:<ReviewsPage/>
            },
            {
                path:"/delivery",
                element:<DeliveryPage/>
            },
        ]
    }



])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
