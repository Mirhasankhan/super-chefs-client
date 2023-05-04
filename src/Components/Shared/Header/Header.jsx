import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(error => { })
    }
    return (
        <div className="navbar bg-primary text-primary-content lg:px-20">
            <Link to="/" className="btn btn-ghost normal-case text-2xl">Super Chef</Link>
            <div className='ml-auto flex gap-6'>
                <ActiveLink to="/" className="btn btn-ghost normal-case text-xl">Home</ActiveLink>
                <ActiveLink to="/blog" className="mx-10 btn btn-ghost normal-case text-xl">Blog</ActiveLink>
                {
                    user ?
                     <div className='flex items-center'>
                        <img title={user.displayName} className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                        <button className="btn btn-info ml-3 text-white lowercase" onClick={handleLogOut}>Logout</button>
                    </div>
                    :
                    <Link to="/login" className='text-bold bg-pink-400 py-1 px-3 rounded-sm'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;