import React, { useState } from 'react';
import Pizza from "../../assets/svg/Pizza.jsx";
import Set from "../../assets/svg/Set.jsx";
import Wok from "../../assets/svg/Wok.jsx";
import Rolly from "../../assets/svg/Rolly.jsx";
import Bread from "../../assets/svg/Bread.jsx";
import Salat from "../../assets/svg/Salat.jsx";
import Sup from "../../assets/svg/Sup.jsx";
import Kong from "../../assets/svg/Kong.jsx";
import K from "../../assets/svg/K.jsx";
import Acsia from "../../assets/svg/Acsia.jsx";
import {motion} from "framer-motion";

const AccordionModal = () => {
    const [mod, setMod ] = useState(false)

    const accordion = () => {
        setMod(!mod)
    }

    return (
        <div>
            <motion.div whileHover={{color: "#ff6600", scale: 1.1, transition: { duration: 0.3 } }}
                        onClick={accordion} className="flex items-center gap-[12px] mb-[10px]">
                <h2 className="cursor-pointer text-[20px]">lerom</h2>
                <svg className={`h-6 w-6 transition-transform transform ${mod ? 'rotate-10' : 'rotate-0'}`}
                     fill="none"
                     stroke="currentColor">
                    <path strokeWidth="2" d={mod ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}/>
                </svg>
            </motion.div>
            {mod && (
                <div className="">
                    <div className="flex flex-col gap-[10px] cursor-pointer">
                        <div className="flex items-center gap-[5px]">
                            <Pizza />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Пицца</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Set/>
                            <p className="text-[24px] hover:text-amber-600 duration-300">Сеты</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Wok />
                            <p className="text-[24px] hover:text-amber-600 duration-300">WOK</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Rolly />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Роллы</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Bread />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Суши</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Salat />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Салаты</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Sup />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Супы</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Kong />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Корн доги</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <K />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Напитки</p>
                        </div>
                        <div className="flex items-center gap-[5px]">
                            <Acsia />
                            <p className="text-[24px] hover:text-amber-600 duration-300">Акции</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionModal;
