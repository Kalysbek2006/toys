import React from 'react';
import logo from "../../assets/img/Mask Group.png";
import Accordion from "./Accordion.jsx";

const Left = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="mb-[20px]">
                <img src={logo} alt="img"/>
                <h1 className="text-[30px]">Romsem</h1>
                <div className="w-full h-[1.5px] bg-[#A4ACAD]"></div>
            </div>
            <Accordion/>
        </div>
    );
};

export default Left;