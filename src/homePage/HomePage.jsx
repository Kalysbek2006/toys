import React from 'react';
import Info from "../companet/Info.jsx";
import Home from "../companet/home/Home.jsx";
import Categori from "../companet/categori/Categori.jsx";

const HomePage = () => {
    return (
        <div>
            <Home/>
            <Categori/>
            <Info/>
        </div>
    );
};

export default HomePage;