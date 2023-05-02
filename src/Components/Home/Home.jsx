import React, { useState } from 'react';
import chef from '../../assets/mrchef.png';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';

const Home = () => {
    const chefsData = useLoaderData()
    console.log(chefsData);

    return (
        <div>
            <div className='main-container overflow-hidden'>
                <div>
                    <img className='h-96 w-96' src={chef} alt="" />
                </div>
            </div>
            <div className='mx-5 mt-3 grid lg:grid-cols-3 gap-3'>
                {
                    chefsData.map(chef => <Chefs
                        chef={chef}
                        key={chef.id}
                    >
                    </Chefs>)
                }
            </div>
        </div>
    );
};

export default Home;
