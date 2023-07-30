import React from 'react';
import service1 from '../../../assets/service-1.json'
import service2 from '../../../assets/service-2.json'
import service3 from '../../../assets/service-3.json'
import service4 from '../../../assets/service-4.json'
import Lottie from "lottie-react";

const Service = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-2 gap-3 text-white font-medium mx-2 md:mx-6'>
            <div className='h-96'>
                <Lottie className='w-full h-full' animationData={service1} loop={true} />
                <h2>Fast Delivery</h2>
            </div>
          
            <div className='h-96'>
                <Lottie className='w-full h-full' animationData={service3} loop={true} />
            </div>
            <div className='h-96'>
                <Lottie className='w-full h-full' animationData={service4} loop={true} />
            </div>
            <div className='h-80'>
                <Lottie className='w-full h-full' animationData={service2} loop={true} />
            </div>
        </div>
    );
};

export default Service;