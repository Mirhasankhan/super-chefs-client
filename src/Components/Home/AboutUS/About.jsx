import React from 'react';
import chef1 from '../../../assets/chef-1.png'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-6 bg-black'>
            <h1 className='text-sky-500 text-center text-2xl md:text-5xl font-bold '>About Us</h1>
            <div className='grid md:grid-cols-2 gap-3 items-center mx-2 md:mx-6'>
                <div>
                    <img className='h-64 mx-auto md:h-full' src={chef1} alt="" />
                </div>
                <div>
                    <h1 className='pb-2 text-2xl md:text-4xl font-semibold text-white '>Our Specialty</h1>
                    <p className='text-justify text-gray-300 text-xl md:text-2xl'>Welcome to the wonderful world of beets! I am delighted you are here. A lot of people ask me, "Why beets?" in which I respond with a cheeky grin, "'Beets' Me!" Actually, beets intrigue me as I think they are vibrantly diverse, spectacularly nutritious, and remarkably under-utilized.</p>
                   <Link to="/menu"> <button className='btn btn-outline btn-secondary mt-4'>See Our Menu</button></Link>
                </div>
            </div>
        </div>
    );
};

export default About;