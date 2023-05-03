import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => { })
    }
    return (
        <div className="navbar bg-primary text-primary-content lg:px-20">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Super Chef</Link>
            <div className='ml-auto'>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/" className="mx-10 btn btn-ghost normal-case text-xl">Blog</Link>
                {
                    user ?
                     <div className='flex items-center'>
                        <img title={user.displayName} className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                        <button className='bg-green-400 rounded-md py-1 px-2 font-medium ml-2' onClick={handleLogOut}>Logout</button>
                    </div>
                    :
                    <Link to="/login" className='text-bold bg-pink-400 py-1 px-3 rounded-sm'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;