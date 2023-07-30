import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
    const { image, name, likes, experience, numRecipes,id } = chef;
    return (
        <div className="card shadow-lg bg-black">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="h-64 w-64 rounded-full" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title flex justify-center text-2xl text-blue-500">{name}</h2>
                <div className='flex justify-between my-2'>
                    <p className='font-semibold'>Experience: <span className='text-purple-600'>{experience}</span></p>
                    <p>Recipe: <span className='text-purple-600'>{numRecipes}</span></p>
                    <p className='flex items-center'> <FaThumbsUp className='pr-1 text-blue-600' /><span className='text-purple-600'>{likes}</span></p>
                </div>
                <div className="card-actions">
                    <Link className='w-full' to={`chef/${id}`}>
                        <button className="w-full btn btn-primary">View Recipes</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;