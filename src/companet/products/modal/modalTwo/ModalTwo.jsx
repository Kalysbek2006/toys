import React, {useState} from 'react';

const ModalTwo = ({props}) => {
    const [name, setName] = useState(false);
    const [cheaper, setCheaper] = useState(false)
    const [expensive, setExpensive] = useState(false)
    const [quantity, setQuantity] = useState(false)
    const [weight, setWeight] = useState(false)

    const toggleName = () => {
        setName(!name);
    };
    const toggleCheaper = () => {
        setCheaper(!cheaper)
    };
    const toggleExpensive = () => {
        setExpensive(!expensive)
    };
    const toggleQuantity = () => {
        setQuantity(!quantity)
    };
    const toggleWeight = () => {
        setWeight(!weight)
    };

    return (
        <div>


            <div className="p-4 text-black flex flex-col gap-2 bg-blue-400 text-[18px] font-normal">
                <p onClick={toggleName} className="cursor-pointer flex items-center gap-3 ">Название</p>
                {name && (
                    <div className="p-2 text-white flex flex-col gap-1 text-[15px]">
                        <li>Саломон сет</li>
                        <li>Сет "5 Филадельфий"</li>
                        <li>Филадельфия и лосось сет</li>
                        <li>Сет "6 Филадельфий"</li>
                        <li>Топовый сет</li>
                        <li>Камикадзе сет</li>
                        <li>Сет "4 Филадельфии"</li>
                        <li>Филадельфия LOVE сет</li>
                        <li>Якудза сет</li>

                    </div>
                )}

                <p onClick={toggleCheaper} className="cursor-pointer flex items-center gap-3 ">Сначала дешевле</p>
                {cheaper && (
                    <div className="p-2 text-white flex flex-col gap-1 text-[15px]">
                        <li>1469 СОМ</li>
                        <li>1479 СОМ"</li>
                        <li>1499 СОМ</li>
                    </div>
                )}

                <p onClick={toggleExpensive} className="cursor-pointer flex items-center gap-3 ">Сначала дороже</p>
                {expensive && (
                    <div className="p-2 text-white flex flex-col gap-1 text-[15px]">
                        <li>1559 СОМ</li>
                        <li>1519СОМ</li>
                        <li>1500 СОМ</li>


                    </div>
                )}

                <p onClick={toggleQuantity} className="cursor-pointer flex items-center gap-3 ">Количество кусочков</p>
                {quantity && (
                    <div className="p-2 text-white flex flex-col gap-1 text-[15px]">
                        <li>30 кусочков</li>
                        <li>40 кусочек</li>
                        <li>36 кусочек</li>
                        <li>46 кусочек</li>
                        <li>52 кусочек</li>
                        <li>32 кусочек</li>
                        <li>50 кусочек</li>
                    </div>
                )}

                <p onClick={toggleWeight} className="cursor-pointer flex items-center gap-3">Вес</p>
                {weight && (
                    <div className="p-2 text-white flex flex-col gap-1 text-[15px]">
                        <li>1050 грамм</li>
                        <li>1120 грамм</li>
                        <li>1260 грамм</li>
                        <li>1320 грамм </li>
                        <li>1020 грамм </li>
                        <li>1200 грамм </li>
                        <li>1100 грамм</li>
                        <li>1000 грамм</li>
                        <li>1270 грамм</li>

                    </div>
                )}
            </div>


        </div>
    );
};

export default ModalTwo;