import React from 'react';
import {Container} from "../../../homePage/container/Container.jsx";
import {Outlet} from "react-router";
import { motion, useScroll } from "framer-motion";

const OrderSushe = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <Container>

                <div className="mt-[174px]">
                    <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}
                    >
                        <h1 className="text-gray-600 text-[24px] font-bold mb-[10px]">Заказать суши в Бишкеке</h1>

                        <p className="text-gray-600 text-[18px] font-normal">Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с
                            доставкой на дом,
                            приготовленные <br/> по классическим и адаптированным к европейской аудитории рецептам, а также
                            собственным наработкам наших <br/> поваров. Мы ценим время наших клиентов, поэтому вы можете
                            заказать
                            суши в Харькове с доставкой на дом или в <br/> офис.

                            <p className="mt-[10px]"> В нашем меню более 20 видов суши:</p>

                            <nav className="my-[10px]">
                                <li> Классические с сырым лососем, тунцом, окунем.</li>
                                <li> Экзотические с тигровой креветкой, морским гребешком.</li>
                                <li> Пикантные с копченым лососем, угрем.</li>
                            </nav>


                            В меню также представлены гунканы: с начинкой из красной икры и тобико,
                            а также феликсы, где японский <br/> майонез сочетается с рыбой, морепродуктами, угрем. Любители острых
                            блюд могут купить суши с соусом спайси. <br/> Популярные начинки — копченая курица, снежный краб,
                            креветки, гребешки, тунец, лосось и окунь.
                        </p>

                    </motion.div>
                    
                </div>

                <Outlet/>
            </Container>
        </>
    );
};

export default OrderSushe;