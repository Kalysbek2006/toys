import React from 'react';

const Reviews = () => {
    return (
        <div className='font-medium'>
            <div className='mt-[50px] flex justify-between'>
            <h3 className=' text-2xl'>Отзывы</h3>
            <button className='bg-black text-white rounded-md px-[10px] font-normal'>+ Добавить отзыв</button>
            </div>
            <div className='bg-white mt-[44px] pb-[20px] pl-[20px] rounded-md pt-[10px]'>
                <div className='flex gap-[10px] mb-[20px]'>
                <h3 className='text-2xl'>Розалия</h3>
                <h4 className='text-lg pt-[5px] text-gray-500 '> 02.24.21</h4>
                </div>
                <p className='font-normal text-lg'>Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
            </div>
            <div className='bg-white mt-[20px] pb-[20px] pl-[20px] rounded-md pt-[10px]'>
                <div className='flex gap-[10px] mb-[20px]'>
                <h3 className='text-2xl'>Елена</h3>
                <h4 className='text-lg pt-[5px] text-gray-500 '> 02.23.21</h4>
                </div>
                <p className='font-normal text-lg'>Ооочень вкусно!!!!!</p>
            </div>
            <div className='bg-white mt-[20px] mb-[100px] pb-[20px] pl-[20px] rounded-md pt-[10px]'>
                <div className='flex gap-[10px] mb-[20px]'>
                <h3 className='text-2xl'>Сергей Гаврилюк</h3>
                <h4 className='text-lg pt-[5px] text-gray-500 '> 02.23.21</h4>
                </div>
                <p className='font-normal w-[910px] text-lg'>Заказываем у Вас больше 2 -ух лет, были разные ситуации, но сервис стал лучше, суши вкуснее. За доставку сегодня на время, огромное спасибо, точь-в-точь в минута в минуту. Успехов Вам и приятных бонусов нам )</p>
            </div>
        </div>
    );
};

export default Reviews;