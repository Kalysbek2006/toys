import { useState } from "react";
import Cash from "../../assets/svg/Cash.svg";
import Card from "../../assets/svg/Card.svg";

const Delivery = () => {
  const [cashActive, setCashActive] = useState(true);
  const [cardActive, setCardActive] = useState(false);

  const [courierActive, setCourierActive] = useState(true);
  const [pickupActive, setPickupActive] = useState(false);

  const [nowActive, setNowActive] = useState(true);
  const [thenActive, setThenActive] = useState(false);

  const handleButtonClick = (method) => {
    if (method === "cash") {
      setCashActive(true);
      setCardActive(false);
    } else if (method === "card") {
      setCashActive(false);
      setCardActive(true);
    }

    if (method === "courier") {
      setCourierActive(true);
      setPickupActive(false);
    } else if (method === "pickup") {
      setCourierActive(false);
      setPickupActive(true);
    }
    if (method === "now") {
      setNowActive(true);
      setThenActive(false);
    } else if (method === "then") {
      setNowActive(false);
      setThenActive(true);
    }
  };

  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="flex gap-[40px]">
        <div>
          <div>
            <h1 className="mb-[30px] mt-[20px] text-2xl">Ваши данные</h1>
            <input
              className="mr-[20px] outline-none py-[5px] rounded-md px-[10px]"
              placeholder="Телефон"
              type="text"
            />
            <input
              className=" py-[5px]  outline-none rounded-md px-[10px]"
              placeholder="Имя"
              type="text"
            />
          </div>
          <div className="flex mt-[20px]">
            <button
              className={` flex gap-[5px] px-[50px] py-2 rounded-s-md ${
                cashActive ? "bg-orange-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => handleButtonClick("cash")}
            >
              <img src={Cash} alt="" />
              Наличными
            </button>
            <button
              className={`flex gap-[5px] px-[67px] py-2 rounded-e-md ${
                cardActive ? "bg-orange-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => handleButtonClick("card")}
            >
              <img src={Card} alt="" />
              Картой
            </button>
          </div>
          <div>
            <label htmlFor="">
              <input className=" mt-[29px]  mr-[10px]" type="checkbox" />
              <span className="text-xl">Подготовить сдачу</span>
            </label>
            <input
              className=" py-[5px]  outline-none rounded-md ml-[28px] px-[10px]"
              placeholder="Сумма"
              type="text"
            />
          </div>
          <input
            className=" mt-[20px]  outline-none py-[5px] rounded-md px-[123px] "
            placeholder="Коментарий к заказу"
            type="text"
          />

          <div className="flex gap-[16px] items-center">
            <p className="text-2xl">Палочки + соусник обычные</p>
            <button className="text-4xl pb-[5px] " onClick={decrement}>
              -
            </button>
            <span className="text-2xl font-bold">{count}</span>
            <button
              className="bg-orange-500 rounded-full text-white text-xl px-[7px] "
              onClick={increment}
            >
              +
            </button>
          </div>
          <input
            className=" mt-[20px]  outline-none py-[5px] rounded-md px-[123px] "
            placeholder="Введите промокод"
            type="text"
          />
        </div>
        <div className="mt-[60px]">
          <div className="flex mt-[20px] ">
            <button
              className={` flex gap-[5px] px-[67px] py-2 rounded-s-md ${
                courierActive
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleButtonClick("courier")}
            >
              Курьером
            </button>
            <button
              className={`flex gap-[5px] px-[67px] py-2 rounded-e-md ${
                pickupActive
                  ? "bg-orange-500 text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => handleButtonClick("pickup")}
            >
              Самовывоз
            </button>
          </div>
          <div className="flex gap-[17px]">
            <input
              className=" mt-[20px]  outline-none py-[5px] rounded-md px-[10px] "
              placeholder="Улица"
              type="text"
            />
            <input
              className=" mt-[20px]  outline-none py-[5px] rounded-md px-[10px] "
              placeholder="Дом"
              type="text"
            />
          </div>
          <div className="flex gap-[17px]">
            <input
              className=" mt-[20px]  outline-none py-[5px] rounded-md px-[10px] "
              placeholder="Квартира"
              type="text"
            />
            <input
              className=" mt-[20px]  outline-none py-[5px] rounded-md px-[10px] "
              placeholder="Подъезд"
              type="text"
            />
          </div>
          <div className="flex gap-[17px]">
            <input
              className=" mt-[20px]  outline-none py-[5px] rounded-md px-[10px] "
              placeholder="Этаж"
              type="text"
            />
            <input
              className=" mt-[20px]  outline-none py-[5px] rounded-md px-[10px] "
              placeholder="Код"
              type="text"
            />
          </div>
          <div className="flex mt-[20px] ">
            <button
              className={` flex gap-[5px] px-[70px] py-2 rounded-s-md ${
                nowActive ? "bg-orange-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => handleButtonClick("now")}
            >
              На сейчас
            </button>
            <button
              className={`flex gap-[5px] px-[70px] py-2 rounded-e-md ${
                thenActive ? "bg-orange-500 text-white" : "bg-white text-black"
              }`}
              onClick={() => handleButtonClick("then")}
            >
              На время
            </button>
          </div>
          <input
            className=" mt-[20px]  outline-none py-[5px] rounded-md px-[123px] "
            placeholder="E-mail(необязательно)"
            type="text"
          />
        </div>
      </div>
      <button className=" mt-[40px] rounded-md hover:bg-orange-500 duration-300 bg-orange-600 w-[900px] text-white h-[50px]">Оформить заказ</button>
      <p className="text-center w-[900px] mt-[10px] mb-[20px]"> Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с Публичной оффертой</p>
    </div>
  );
};

export default Delivery;
