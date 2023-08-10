import React from 'react';
import Chefs from './Chefs/Chefs';
import TopShows from './TopShows/TopShows';
import Banner from './Banner/Banner';
import About from './AboutUS/About';
import Service from './Food/service';


const Home = () => {
    return (
        <div className='bg-black'>
            <Banner />
            <TopShows />
            <About></About>
            {/* <Service /> */}
        </div>
    );
};

export default Home;
