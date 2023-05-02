import React from 'react';

const Recipes = ({ recipe }) => {
    const { bangladeshiFood, cookingMethod, ingredients, rating, } = recipe;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">            
            <div className="card-body">
                <h2 className="card-title">{bangladeshiFood}</h2>
                <p>Cooking Method: {cookingMethod}</p>
                <div>
                    {
                        ingredients.map(ingredient => <li>{ingredient}</li>)
                    }
                </div>
                <div className="card-actions justify-end">
                    <p>rating:{rating}</p>
                    <button className="btn btn-primary">Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default Recipes;