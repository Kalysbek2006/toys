import React, { useState } from "react";
import Sushi from "../../assets/img/sushi.png";

const Cart = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="w-[200px] text-center right-0  absolute">
      <button className=" px-[40px] text-xl py-[10px] rounded-md ">Корзина</button>
      <div className="bg-white rounded-lg pl-[10px] pt-[20px]">
        <div className="flex">
          <img src={Sushi} alt="" />
          <p>Самая большая</p>
        </div>
        <div className="flex gap-[16px] items-center justify-center">
          <button className="text-4xl pb-[5px] " onClick={decrement}>
            -
          </button>
          <span className="text-lg font-bold">{count}</span>
          <button
            className="bg-orange-500 rounded-full text-white text-xl px-[7px] "
            onClick={increment}
          >
            +
          </button>
        </div>
        <div className="w-[150px] pb-[30px] mt-[200px] ml-[20px]">
          <div className="flex font-semibold justify-between">
            <p>1 товар</p>
            <p>170 СОМ</p>
          </div>
          <div className="text-neutral-300">
            _____________________
          </div>
          <div className="flex font-semibold justify-between">
            <p>Скидка</p>
            <p>0 СОМ</p>
          </div>
          <div className="text-neutral-300">
            _____________________
          </div>
          <div className="flex font-semibold justify-between">
            <p>Доставка</p>
            <p>Бесплатно</p>
          </div>
          <div className="text-neutral-300">
            _____________________
          </div>
          <div className="flex font-semibold text-amber-500 justify-between">
            <p>Итого</p>
            <p>170 СОМ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
