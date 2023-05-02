import React from 'react';

const Chefs = ({ chef }) => {
    const {image, name, likes, experience, numRecipes} = chef;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="h-64 w-64 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div>
                    
                </div>
                <div className="card-actions">
                    <button className="w-full btn btn-primary">View Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Chefs;