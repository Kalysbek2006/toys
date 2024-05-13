import React from 'react';
import {Container} from "../../container/Container.jsx"
import Header from "../header/Header.jsx";
import {Outlet} from "react-router";
import Footer from "../footer/Footer.jsx";
export default function Layout() {
    return (
        <div>
            <Container>
                <>
                    <Header/>
                    <Outlet/>
                    <Footer/>
                </>
           </Container>
        </div>
    )
}
