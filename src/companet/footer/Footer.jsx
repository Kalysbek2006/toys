import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container flex justify-around w-[900px] h-[260px] border-t-[1px] pt-[20px]">
                <div>
                    <p>О компании</p>
                    <p className="py-[20px]">Доставка и оплата</p>
                    <p>Лента материалов</p>
                    <p className="pt-[20px]">Политика возврата</p>
                </div>
                <div className="border-x-[1px] px-[40px]">
                    <h1 className="font-medium pb-[10px]">Введите номер</h1>
                    <p className="text-[#A4ACAD] pb-[20px]">+996 (__) ___ __ __</p>
                    <p className="w-[212px] text-[#A4ACAD]">Выберите удобный
                        мессенджер для общения
                    </p>
                </div>
                <div>
                    <p className="text-[#A4ACAD]">Тел:+996 705 188 955 </p>
                    <p className="text-[#A4ACAD]">Тел:+996 555 188 955 </p>
                    <p className="text-[#A4ACAD]">Адрес:Бакаева 126</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;