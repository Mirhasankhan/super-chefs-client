import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = ({ recipe }) => {
    const { bangladeshiFood, cookingMethod, ingredients, rating, } = recipe;

    const addToFavourite = (e) => {
        toast('Added To Favourite')
        e.target.setAttribute('disabled', 'true')
    }
    return (
        <div className="card bg-slate-500 shadow-xl mb-3 text-white font-medium">
            <div className="card-body">
                <h2 className="card-title text-3xl">{bangladeshiFood}</h2>
                <p><span className='text-xl text-blue-300'>Cooking Method:-</span> {cookingMethod}</p>
                <div>
                    <p className='text-xl text-blue-300 mb-2'>Ingredients:-</p>
                    {
                        ingredients.map((ingredient, index) => <li className='list-none' key={index}
                        >{index + 1}. {ingredient}
                        </li>)
                    }
                </div>
                <div className="flex justify-between">
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: 150 }} value={Math.round(rating)} readOnly />
                        <p className='pl-1'>{rating}</p>
                    </div>
                    <button onClick={addToFavourite} className="btn btn-primary">Favourite</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Recipes;