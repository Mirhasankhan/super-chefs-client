import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="navbar bg-primary text-primary-content lg:px-20">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Super Chef</Link>
           <div className='ml-auto'>
           <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to="/" className="mx-10 btn btn-ghost normal-case text-xl">Blog</Link>
            {
                user ? <p title='name dhekao'>Profile</p>: <Link to="/login" className='text-bold bg-pink-400 py-1 px-3 rounded-sm'>Login</Link>
            }
           </div>
        </div>
    );
};

export default Header;