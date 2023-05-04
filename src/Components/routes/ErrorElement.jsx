import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from '../../../src/assets/errorImage.jpg';

const ErrorElement = () => {
    const { error, status } = useRouteError();

    return (
        <div className='flex justify-center items-center mt-14'>
            <div className='flex flex-col items-center'>
                <img className='h-48 rounded-lg mb-3' src={errorImage} alt="" />
                <p className='text-xl'>{error.message}</p>
               <Link to="/"> <button className="btn btn-active mt-3">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;