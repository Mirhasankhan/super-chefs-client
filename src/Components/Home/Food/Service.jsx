import React from 'react';
import service1 from '../../../assets/service-1.json'
import service2 from '../../../assets/service-2.json'
import service3 from '../../../assets/service-3.json'
import service4 from '../../../assets/service-4.json'
import Lottie from "lottie-react";

const Service = () => {

    return (
        <div className='my-12'>
            <h1 className='text-4xl font-bold text-center text-blue-500 hover:text-purple-500'>Our Services</h1>
            <div className='grid md:grid-cols-4 grid-cols-2 gap-3 text-white font-medium mx-2 md:mx-6'>
                <div className=''>
                    <Lottie className='w-full h-full' animationData={service1} loop={true} />
                    <h2 className='text-gray-400 text-2xl text-center font-semibold'>Fast Delivery</h2>
                </div>
                <div className=''>
                    <Lottie className='w-full h-full' animationData={service3} loop={true} />
                    <h2 className='text-gray-400 text-2xl text-center font-semibold'>Easy Payment</h2>
                </div>
                <div className=''>
                    <Lottie className='w-full h-full' animationData={service4} loop={true} />
                    <h2 className='text-gray-400 text-2xl text-center font-semibold'>Best Chefs</h2>
                </div>
                <div className=''>
                    <Lottie className='w-full h-full' animationData={service2} loop={true} />
                    <h2 className='text-gray-400 bg-black text-2xl text-center font-semibold'>Delicious Foods</h2>
                </div>
            </div>
        </div>
    );
};

export default Service;