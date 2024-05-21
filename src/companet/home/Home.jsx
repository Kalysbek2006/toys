import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import One from "../../assets/img/California-Sushi-Rolls-FT-RECIPE0123-efc7744ed3e642c7864788a7c227facb.jpg"
import two from "../../assets/img/hq720.jpg"
import three from "../../assets/img/images.jpg"
import four from "../../assets/img/Kukuruznaya-sobachka_.jpg"
import five from "../../assets/img/Без названия.jpg"

import { Pagination } from 'swiper/modules';


const Home = () => {
    return (
        <section className="my-[50px]">
            <div className="container">
                <Swiper  modules={[Pagination]} loop={true} className="mySwiper">
                    <SwiperSlide>
                        <div>
                            <img className="w-[100%] h-[500px] relative" src={One} alt="img"/>
                            <div className="absolute bottom-[60px] right-[100px] flex flex-col items-center gap-[10px]">
                                <h1 className="text-[25px] font-bold">999сом</h1>
                                <button className="py-3 px-[100px] rounded-lg bg-amber-700 text-white text-[18px]">
                                    Хочу!!!
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-[100%] h-[500px] relative" src={two} alt="img"/>
                            <div className="absolute bottom-[60px] right-[100px] flex flex-col items-center gap-[10px]">
                                <h1 className="text-[25px] font-bold">999сом</h1>
                                <button className="py-3 px-[100px] rounded-lg bg-amber-700 text-white text-[18px]">
                                    Хочу!!!
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-[100%] h-[500px] relative" src={three} alt="img"/>
                            <div className="absolute bottom-[60px] right-[100px] flex flex-col items-center gap-[10px]">
                                <h1 className="text-[25px] font-bold">999сом</h1>
                                <button className="py-3 px-[100px] rounded-lg bg-amber-700 text-white text-[18px]">
                                    Хочу!!!
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-[100%] h-[500px] relative" src={four} alt="img"/>
                            <div className="absolute bottom-[60px] right-[100px] flex flex-col items-center gap-[10px]">
                                <h1 className="text-[25px] font-bold">999сом</h1>
                                <button className="py-3 px-[100px] rounded-lg bg-amber-700 text-white text-[18px]">
                                    Хочу!!!
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img className="w-[100%] h-[500px] relative" src={five} alt="img"/>
                            <div className="absolute bottom-[60px] right-[100px] flex flex-col items-center gap-[10px]">
                                <h1 className="text-[25px] font-bold">999сом</h1>
                                <button className="py-3 px-[100px] rounded-lg bg-amber-700 text-white text-[18px]">
                                    Хочу!!!
                                </button>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
};

export default Home;