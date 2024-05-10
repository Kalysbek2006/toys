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
                        <img className="relative" src={homeOne} alt="img"/>
                        <p className="text-[24px] text-white font-medium absolute top-[830px] left-[130px]">Чикен</p>
                    </div>
                    <div>
                        <img className="relative pt-[30px]" src={homeTwo} alt="img"/>
                        <p className="text-[24px] text-white font-medium absolute top-[1050px] left-[140px]">Пицца</p>
                    </div>
                </div>
                <div>
                    <div className="flex gap-[20px]">
                        <div>
                            <img className="relative" src={homeThree} alt="img"/>
                            <p className="text-[24px]  font-medium absolute top-[830px] left-[920px]">С угрем</p>
                        </div>
                        <div>
                            <img className="relative" src={homeFive} alt="img"/>
                            <p className="text-[24px] text-white font-medium absolute top-[830px] left-[80px]">Чикен</p>
                        </div>
                    </div>
                    <div>
                        <img className="relative pt-[30px]" src={homeFour} alt="img"/>
                        <p className="text-[24px] text-white font-medium absolute top-[1050px] left-[720px]">Акции</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Categori;