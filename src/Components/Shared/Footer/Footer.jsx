import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-5'>
            <div className='bg-black text-white grid grid-cols-3 gap-10 lg:px-10 pb-2'>
                <div>
                    <h1 className='text-2xl font-medium text-purple-700 py-3'>Get to know us</h1>
                    <div className='flex flex-col'>
                        <Link to="/">Home</Link>
                        <Link>About Us</Link>
                        <Link>Our Services</Link>
                        <Link>Reviews</Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-medium text-purple-700 py-3'>Connect with us</h1>
                    <div className='flex items-center'>
                        <FaFacebook className='text-blue-600 text-xl' />
                        <p className='pl-1'>Facebook</p>
                    </div>
                    <div className='flex items-center my-2'>
                        <FaTwitter className='text-xl text-blue-400' />
                        <p className='pl-1'>Twitter</p>
                    </div>
                    <div className='flex items-center'>
                        <FaInstagram className='text-xl text-pink-400' />
                        <p className='pl-1'>Instagram</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-medium text-purple-700 py-3'>Send your feedback</h1>
                    <label className='text-xl text-blue-400' htmlFor="email">Email</label>
                    <input className='border p-1 rounded-md block my-2' id='email' type="email" placeholder='Your Email' />
                    <label className='text-xl text-blue-400' htmlFor="textarea">Your Feedback</label>
                    <textarea className='border block rounded-md' placeholder='Message' id='textarea' cols="30" rows="3"></textarea>
                </div>
            </div>
            <p className='text-center text-pink-500 text-xl mb-2'>&copy;copyright: All rights reserved!!</p>
        </div>
    );
};

export default Footer;