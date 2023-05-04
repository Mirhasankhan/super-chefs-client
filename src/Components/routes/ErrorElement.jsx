import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const { error, status } = useRouteError();

    return (
        <div className='h-96 flex justify-center items-center'>
            <div className='flex flex-col items-center'>
                <h1 className='text-6xl font-bold mb-4'>{status}</h1>
                <p className='text-xl'>{error.message}</p>
               <Link to="/"> <button className="btn btn-active mt-3">Back to home</button></Link>
            </div>
        </div>
    );
};

export default ErrorElement;