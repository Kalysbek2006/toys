import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import products from "../api/Api.js";
import Card from "../companet/products/card/Card.jsx";
import {motion} from "framer-motion";


const HomeSwiper = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-[20px] font-medium">Новинки</h1>
                <h1 className="text-[20px] font-medium">Популярное</h1>
            </motion.div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    products.map(product =>(
                        <SwiperSlide>
                            <Card product={product}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    );
};

export default HomeSwiper;