import React, {useState} from 'react';
import {SlArrowDownCircle} from "react-icons/sl";
import ModalTwo from "./modalTwo/ModalTwo.jsx";
import SvgCet from "../../../assets/svg/SvgCet.jsx";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const
        toggleAccordion = () => {
            setIsOpen(!isOpen);
        };

    return (
        <motion.div className="border border-gray-200 rounded w-[290px] absolute ml-[990px] top-[30px] bg-blue-400 z-50"
             initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
             transition={{
                 duration: 0.8,
                 delay: 0.5,
                 ease: [0, 0.71, 0.2, 1.01]
             }}
        >

            <div className="flex justify-between items-center p-6 cursor-pointer" onClick={toggleAccordion}>

                <h2 className="text-[18px] font-semibold">По умолчанию</h2>

                <svg className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-10' : 'rotate-0'}`}
                     fill="none"
                     stroke="currentColor">

                    <path strokeWidth="2" d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}/>

                </svg>

            </div>
            {isOpen && <ModalTwo onClose={() => setIsOpen(false)}/>}
        </motion.div>
    );
};

export default Modal;
