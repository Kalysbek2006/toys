import React from 'react';
import Header from "../header/Header.jsx";
import Footer from "../footer/Footer.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/* <main>{children}</main> */}
            <Footer/>
        </div>

    )
}
export default Layout