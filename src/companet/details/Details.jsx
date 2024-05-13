import React, {useState} from 'react';
import {Container} from "../../container/Container.jsx";
import {Outlet} from "react-router";
import {SlArrowLeft} from "react-icons/sl";
import {BsChevronRight} from "react-icons/bs";
import detailsG from "../../assets/img/Rectangle detail G.png"
import {FaPlus} from "react-icons/fa6";
import {FaMinus} from "react-icons/fa6";
import SwiperDetails from "./swiperDetails/SwiperDetails.jsx";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const Details = () => {
    const navigate = useNavigate()

    return (
        <>
            <Container>

                <motion.div
                    initial={{
                        x: -500
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        delay: 0
                    }}>

                    <div className="flex justify-between items-center mt-[50px]">
                        <h1 className="flex items-center gap-3" onClick={() => navigate("/products")}>
                            <SlArrowLeft
                                className="w-[20px] h-[20px] bg-amber-600 rounded-full text-white text-[2px]"/> Назад
                        </h1>

                        <h2 className="flex items-center gap-3">
                            Вперед <BsChevronRight
                            className="w-[20px] h-[20px] bg-amber-600 rounded-full text-white text-[2px]"/>
                        </h2>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        z: 600,
                        opacity:0
                    }}
                    animate={{
                        z: 0,
                        opacity:1
                    }}
                    transition={{
                        delay: 0.2
                    }}
                >
                    <div className="w-[950px] h-[435px] bg-white shadow-xl mt-[50px] m-auto flex gap-[100px] rounded-[10px]">

                        <img src={detailsG} alt="img" className="w-[420px] h-[400px]"/>

                        <div className="mt-[20px]">
                            <h1 className="text-[40px] font-medium text-black">Филадельфия и <br/>
                                лосось сет</h1>
                            <p className="text-[18px] font-light text-amber-600 mt-[10px] mb-[20px]">290 грамм</p>


                            <div className="flex">
                                <h2 className="flex items-center text-[24px] font-bold">1150 СОМ <FaMinus
                                    className="mx-[10px]"/></h2>
                                <h3 className="flex items-center text-[36px] font-bold">10
                                    <span
                                        className="text-[25px] py-[10px] px-[10px] bg-amber-600 rounded-full ml-5 text-white">
                                    <FaPlus/>
                                </span></h3>

                            </div>

                            <h4 className="font-medium text-[18px]">Состав</h4>
                            <p className="font-light text-[18px] mb-[31px]">Лосось, сыр "Филадельфия", огурец,
                                авокадо</p>
                            <button
                                className="text-white font-medium py-[5px] px-[65px] rounded-[7px] bg-amber-600 text-[24px]">Хочу!
                            </button>

                        </div>


                    </div>

                </motion.div>

                <SwiperDetails/>

                <Outlet/>
            </Container>
        </>
    );
};

export default Details;