import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import Recipes from '../Recipes/Recipes';
import LazyLoad from 'react-lazy-load';

const ChefDetails = () => {
    const detail = useLoaderData()
    const { chefBio, image, name, likes, experience, numRecipes } = detail;

    return (
        <div className='lg:mx-10'>
            <div className='flex items-center bg-gradient-to-t from-blue-200 to-blue-50 p-4 mt-5 rounded-lg'>
                <div>
                    {/* <img className='h-64 w-64 rounded-full' src={image} alt="" /> */}
                    <LazyLoad>
                        <img className='h-64 w-64 rounded-full' src={image} alt="" />
                    </LazyLoad>
                </div>
                <div className='pl-3 w-1/2'>
                    <h1 className='text-3xl font-bold'>{name}</h1>
                    <p className='my-2 font-semibold'>Bio: {chefBio}</p>
                    <p className='flex items-center'> <FaThumbsUp className='pr-1 text-xl text-blue-600' /><span className='text-purple-600'>{likes}</span></p>
                </div>
                <div className='ml-auto'>
                    <p className='font-semibold text-xl'>Experience: <span className='text-purple-600'>{experience}</span></p>
                    <p className='font-semibold text-xl'>Recipe: <span className='text-purple-600'>{numRecipes}</span></p>
                </div>
            </div>
            <h1 className='text-4xl font-bold text-center my-6 text-blue-500'>Recipe Made By {name}</h1>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    detail.recipe.map((r, index) => <Recipes key={index} recipe={r}></Recipes>)
                }
            </div>

        </div>
    );
};

export default ChefDetails;