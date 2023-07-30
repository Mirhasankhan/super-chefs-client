import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';
import TopShows from './TopShows/TopShows';
import Banner from './Banner/Banner';
import About from './AboutUS/About';
import Service from './Food/service';


const Home = () => {
    const chefsData = useLoaderData()

    return (
        <div className='bg-black'>
            {/* <div className='bg-gray-400 pt-4 overflow-hidden flex justify-center items-center'>
                <div>
                    <img className='h-96 w-96 mr-5' src={chef} alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-white'>Welcome And Enjoy <br />World-Class Cuisine</h1>
                    <p className='my-3 text-xl text-black'>We believe in highest quality ingredients </p>
                    <button className="btn btn-outline btn-warning mb-3">Contact Us</button>
                </div>
            </div> */}
            <Banner />
            <h1 className='text-4xl font-bold text-center my-5 text-blue-500 hover:text-purple-500'>Explore Top Cooking shows!!</h1>
            <TopShows />
            <h1 className='text-4xl font-bold text-center my-5 text-blue-500 hover:text-purple-500'>Best Bangladeshi Chef's!!</h1>

            {
                chefsData ? <div className='mx-5 mt-3 grid lg:grid-cols-3 gap-5'>
                    {
                        chefsData.map(chef => <Chefs
                            chef={chef}
                            key={chef.id}
                        >
                        </Chefs>)
                    }
                </div>
                    : <div className='flex justify-center'><button className="btn btn-square loading"></button></div>
            }
            <About></About>
            <h1 className='text-4xl font-bold text-center mt-8 mb-5 text-blue-500 hover:text-purple-500'>Necessity of Fresh Foods!!</h1>

            <Service />
        </div>
    );
};

export default Home;
