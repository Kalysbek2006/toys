import React from 'react';
import {Container} from "../../../container/Container.jsx";
import {Outlet} from "react-router";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import products from "../../../api/Api.js";

const Card = () => {
    const navigate = useNavigate()

    return (

        <>
            <Container>

                <div className="mt-[30px] grid grid-cols-3 m-auto gap-5">
                    <div>
                        {products.map((el, index) => (
                            <motion.div>
                                <motion.div
                                    className="w-[310px] h-[430px] shadow-xl border-slate-950 rounded-[10px] mb-6"
                                    custom={index}
                                    whileHover={{scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)'}}
                                    initial={{opacity: 0, y: 50}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5}}>


                                    <img src={el.img} alt="img" className="w-[253px] h-[211px] m-auto"/>

                                    <h1 className="m-auto text-[24px] text-black font-normal pl-[13px] mt-[12px]">{el.title}</h1>

                                    <p className="text-[18px] font-normal mt-[25px] mb-[20px] pl-[13px] text-gray-600">{el.price}</p>

                                    <hr className="w-[290px]"/>

                                    <motion.div className="flex items-center mt-[12px] gap-[12px]"
                                                initial={{opacity: 0, y: 50}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{duration: 0.5, delay: 0.2}}>
                                        <h2 className="text-[24px] font-bold pl-[13px]">{el.many}</h2>
                                        <button onClick={()=>navigate("/details")}
                                                className="w-[143px] h-[40px] bg-amber-600 rounded text-[24px] font-medium">{el.want}
                                        </button>
                                    </motion.div>

                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                </div>


                <Outlet/>
            </Container>

        </>
    )
        ;
};

export default Card;