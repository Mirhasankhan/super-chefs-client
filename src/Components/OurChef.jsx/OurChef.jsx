import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const OurChef = () => {
    const chefsData = useLoaderData()
    console.log(chefsData);
    return (
        <div>
            <h1 className='text-center text-xl md:text-3xl font-semibold my-6'> Meet Our Super Chefs</h1>
            <div className='mx-3 md:mx-16 grid md:grid-cols-3 gap-6 my-4'>
                {
                    chefsData.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                }
            </div>
        </div>
    );
};

export default OurChef;