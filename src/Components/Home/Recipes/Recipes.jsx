import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipes = ({ recipe }) => {
    const { bangladeshiFood, cookingMethod, ingredients, rating, } = recipe;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{bangladeshiFood}</h2>
                <p><span className=' font-medium'>Cooking Method</span>: {cookingMethod}</p>
                <div>
                    <p className='font-medium'>Ingredients:-</p>
                    {
                        ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)
                    }
                </div>
                <div className="flex justify-between">
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: 150 }} value={Math.round(rating)} readOnly />
                        <p className='pl-1'>{rating}</p>
                    </div>
                    <button className="btn btn-primary">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;