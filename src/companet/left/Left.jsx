import React from 'react';
import logo from "../../assets/img/Mask Group.png";
import Accordion from "./Accordion.jsx";

const Left = () => {
    return (
        <div>
            <div className="mb-[10px]">
                <img src={logo} alt="img"/>
                <h1 className="text-[30px]">Romsem</h1>
                <div className="w-[120px] h-[1.5px] bg-[#A4ACAD]"></div>
            </div>
            <Accordion/>
        </div>
    );
};

export default Left;