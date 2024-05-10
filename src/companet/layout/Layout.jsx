import React from 'react';
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import {Outlet} from 'react-router'

export default function Layout() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    )
}