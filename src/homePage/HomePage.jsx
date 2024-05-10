import React from 'react';
import {Container} from "./container/Container.jsx"
import Info from "../companet/Info.jsx";
import Home from "../companet/home/Home.jsx";
import Categori from "../companet/categori/Categori.jsx";
import {Outlet} from "react-router";

const HomePage = () => {
    return (
        <div>
            <Container>
               <>
                   <Home/>
                   <Categori/>

                   <Info/>
               </>
                <Outlet/>
            </Container>
        </div>
    );
};

export default HomePage;