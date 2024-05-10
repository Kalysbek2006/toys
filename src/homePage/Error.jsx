import React from 'react';
import {motion} from "framer-motion";

const Error = () => {
    return (
        <div className="flex items-center justify-center gap-[30px] bg-black">
            <motion.h1 initial={{x:-1000}} animate={{x:0}} className="text-[200px] font-medium text-white">4</motion.h1>
            <motion.h1 initial={{y: -1000}} animate={{y:0}} transition={{delay:0.5}} className="text-[200px] font-medium text-white">0</motion.h1>
            <motion.h1 initial={{x:1000}} animate={{x:0}} className="text-[200px] font-medium text-white">4</motion.h1>
        </div>
    );
};

export default Error;