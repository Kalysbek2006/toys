import {Container} from "../../../homePage/container/Container.jsx";
import {Outlet} from "react-router";
import swImg1 from '../../../assets/img/Ellipse 1.png'
import swImg2 from '../../../assets/img/Ellipse 2.png'
import swImg3 from '../../../assets/img/Ellipse 3.png'
import {FaPlus} from "react-icons/fa6";
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import {FreeMode, Pagination} from 'swiper/modules';

const SwiperDetails = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <>
            <Container>

                <div className="m-auto w-[1178px] h-[435px] mt-[30px]">
                    <h1 className="flex justify-center text-[24px] font-medium">Рекомендуем к этому товару</h1>
                    <div className="mt-[30px]">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30} freeMode={true}
                            pagination={{
                                clickable: true,
                            }} modules={[FreeMode, Pagination]}
                            className="mySwiper" loop={true}>


                            <SwiperSlide>
                                <div className="w-[200px] h-[272px] rounded shadow-xl bg-blue-100">
                                    <img src={swImg3} alt="img" className="w-[200px] h-[200px]"/>

                                    <h1 className="text-[18px] font-medium flex justify-center">Аригато</h1>

                                    <h2 className="flex items-center gap-3 text-[24px] font-bold ml-[34px]">180 СОМ
                                        <span className="py-[5px] px-[5px] bg-amber-600 rounded-full"><FaPlus/></span>
                                    </h2>


                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-[200px] h-[272px] rounded shadow-xl bg-blue-100">
                                    <img src={swImg2} alt="img" className="w-[200px] h-[200px]"/>

                                    <h1 className="text-[18px] font-medium flex justify-center">Банзай</h1>

                                    <h2 className="flex items-center gap-3 text-[24px] font-bold ml-[34px]">170 СОМ
                                        <span className="py-[5px] px-[5px] bg-amber-600 rounded-full"><FaPlus/></span>
                                    </h2>


                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-[200px] h-[272px] rounded shadow-xl bg-blue-100">
                                    <img src={swImg1} alt="img" className="w-[200px] h-[200px]"/>

                                    <h1 className="text-[18px] font-medium flex justify-center">Филадельфия</h1>

                                    <h2 className="flex items-center gap-3 text-[24px] font-bold ml-[34px]">140 СОМ
                                        <span className="py-[5px] px-[5px] bg-amber-600 rounded-full"><FaPlus/></span>
                                    </h2>

                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-[200px] h-[272px] rounded shadow-xl bg-blue-100">
                                    <img src={swImg2} alt="img" className="w-[200px] h-[200px]"/>

                                    <h1 className="text-[18px] font-medium flex justify-center">Филадельфия</h1>

                                    <h2 className="flex items-center gap-3 text-[24px] font-bold ml-[34px]">140 СОМ
                                        <span className="py-[5px] px-[5px] bg-amber-600 rounded-full"><FaPlus/></span>
                                    </h2>

                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>


                </div>


                <Outlet/>
            </Container>
        </>
    );
};

export default SwiperDetails;