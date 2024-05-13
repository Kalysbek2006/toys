import React from 'react';
import Clock from "../../assets/svg/Clock.jsx";
import Search from "../../assets/svg/Search.jsx";
import { useNavigate } from 'react-router';

const Header = () => {

    const navigate = useNavigate();

    return (
        <header className="w-[950зч] h-[94px] flex items-center border-b-[1px]">
            <div className="border-x-[1px]">
                <h1 className="text-[18px] font-medium">Наш телефон</h1>
                <p className="text-[#FF9846] text-[18px] font-medium">
                    +996 705 188 955
                </p>
                <p className="text-[#FF9846] text-[18px] font-medium">
                    +996 555 188 955
                </p>
                <div className="flex items-center gap-[5px]">
                    <button>
                        <Clock/>
                    </button>
                    <p className="text-[#A4ACAD] text-[15px]">работаем с 10:00 до 00:00</p>
                </div>
            </div>
            <div className="ml-[10px] mr-[360px]">
                <p>Город:</p>
                <h1 className="text-[18px] font-medium">Бишкек</h1>
            </div>
          <div className="flex gap-[10px]">
                    <a onClick={() => {
                        navigate(`/reviews`);
                      }}
                    className="text-[18px] hover:text-orange-500 duration-300 cursor-pointer">Отзывы</a>
                    <a onClick={() => {
                        navigate(`/delivery`);
                      }} className="text-[18px] hover:text-orange-500 duration-300">Доставка и оплата</a>
                    <button className="pl-[30px]">
                        <Search/>
                    </button>
                </div>
        </header>
    );
};

export default Header;