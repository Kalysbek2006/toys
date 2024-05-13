import React from 'react';
import {Container} from "../container/Container.jsx";
import {Outlet} from "react-router";
import { motion, useScroll } from "framer-motion";
import Tg from "../assets/svg/Tg.jsx";

const Info = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <Container>

                <div className="my-[100px]">
                    <motion.div
                        className="progress-bar"
                        style={{ scaleX: scrollYProgress }}>
                        <h1 className="font-bold text-[24px] text-[#A4ACAD] pb-[10px]">Заказать суши в Бишкеке</h1>
                        <p className="w-[970px] text-[18px] text-[#A4ACAD]">Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис. <br/>
                            В нашем меню более 20 видов суши:
                            <li>Классические с сырым лососем, тунцом, окунем.</li>
                            <li> Экзотические с тигровой креветкой, морским гребешком.</li>
                            <li> Пикантные с копченым лососем, угрем.</li>
                            В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.
                        </p>
                        <div className="flex items-center justify-center gap-[10px] pt-[20px]">
                            <h1 className="text-[24px] text-[#F46D40] font-medium">Подробнее</h1>
                            <Tg/>
                        </div>

                    </motion.div>

                </div>

                <Outlet/>
            </Container>
        </>
    );
};

export default Info;