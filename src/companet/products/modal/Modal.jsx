import React, {useState} from 'react';
import {SlArrowDownCircle} from "react-icons/sl";
import ModalTwo from "./modalTwo/ModalTwo.jsx";
import SvgCet from "../../../assets/svg/SvgCet.jsx";
import {useNavigate} from "react-router-dom";
import {AnimatePresence, motion} from "framer-motion";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const
        toggleAccordion = () => {
            setIsOpen(!isOpen);
        };

    return (
        <AnimatePresence>
            <motion.div
                className="border border-gray-200 text-white rounded w-[270px]  h-[45px] bg-blue-400 z-50 absolute ml-[690px] "
                initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}>

                <div className="flex items-center gap-7 py-[8px] px-[40px] cursor-pointer" onClick={toggleAccordion}>

                    <h2 className="text-[15px] font-semibold">По умолчанию</h2>

                    <svg className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-10' : 'rotate-0'}`}
                         fill="none"
                         stroke="currentColor">
                        <path strokeWidth="2" d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}/>
                    </svg>

                </div>
                {isOpen && <ModalTwo onClose={() => setIsOpen(false)}/>}
            </motion.div>
        </AnimatePresence>

    );
};

export default Modal;
