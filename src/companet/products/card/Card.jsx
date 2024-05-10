import React from 'react';
import {Container} from "../../../homePage/container/Container.jsx";
import {Outlet} from "react-router";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const Card = () => {
    return (

        <>
            <Container>

                <div className="mt-[30px] grid grid-cols-3 m-auto gap-7">
                    <div>
                        <motion.div className="w-[288px] h-[430px] shadow-xl border-slate-950 rounded-[10px] mb-6"
                                    whileHover={{scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'}}
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5}}
                                   >

                            <img src={props.el.img} alt="img" className="w-[253px] h-[211px] m-auto"/>

                            <h1 className="m-auto text-[24px] text-black font-normal pl-[13px] mt-[12px]"></h1>

                            <p className="text-[18px] font-normal mt-[25px] mb-[20px] pl-[13px] text-gray-600"></p>

                            <hr className="w-[290px]"/>

                        </motion.div>
                    </div>

                </div>


                <Outlet/>
            </Container>

        </>
    )
        ;
};

export default Card;