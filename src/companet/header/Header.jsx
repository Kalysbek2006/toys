import React from 'react';
import Clock from "../../assets/svg/Clock.jsx";
import Search from "../../assets/svg/Search.jsx";

const Header = () => {
    return (
        <header className="w-[1169px] h-[94px] flex items-center justify-between border-b-[1px]">
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
          <div>
                    <p className="text-[15px] text-[#A4ACAD]">Город:</p>
                    <h1 className="text-[18px] font-medium">Бишкек</h1>
                </div>
          <div className="flex gap-[10px]">
                    <a href="#" className="text-[18px]">Отзывы</a>
                    <a href="#" className="text-[18px]">Доставка и оплата</a>
                    <button className="">
                        <Search/>
                    </button>
                </div>
        </header>
    );
};

export default Header;