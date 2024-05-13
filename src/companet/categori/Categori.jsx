import React from 'react';
import {motion} from "framer-motion";
import homeOne from "../../assets/img/С лососем.png"
import homeTwo from "../../assets/img/С филадельфией.png"
import homeThree from "../../assets/img/С угрем.png"
import homeFour from "../../assets/img/Акции.png"
import homeFive from "../../assets/img/Без мяса.png"
const Categori = () => {
    return (
        <div className="container my-[50px]">
            <div className="flex items-center justify-evenly gap-[30px]">
                <div>
                    <div>
                        <img src={homeOne} alt="img"/>
                    </div>
                    <div>
                        <img className=" pt-[30px]" src={homeTwo} alt="img"/>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[20px]">
                        <div>
                            <img src={homeThree} alt="img"/>
                        </div>
                        <div>
                            <img src={homeFive} alt="img"/>
                        </div>
                    </div>
                    <div>
                        <img className=" pt-[30px]" src={homeFour} alt="img"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categori;