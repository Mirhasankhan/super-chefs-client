import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    return (
        <div className='p-3 border-2 rounded-md'>
            <img className='h-80 rounded-lg w-full' src={chef.image} alt="" />
            <h1 className='font-semibold py-2'>Name: {chef.name}</h1>
            <h1>{chef.experience} of experience</h1>
            <p className='py-2'>Recipes: {chef.numRecipes}</p>
            <Link to={`/chef/${chef.id}`}>
                <button className="common-button w-full">View Recipes</button>
            </Link>
        </div>
    );
};

export default Chef;