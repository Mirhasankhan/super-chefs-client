import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';
import logoImg from '../../../assets/chefs.png'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [smallDevice, setSmallDevice] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { })
    }
    return (
        <div className="navbar bg-black text-primary-content lg:px-20">
            <div>
                <img className='rounded-full h-14' src={logoImg} alt="" />
                <Link to="/" className="btn btn-ghost normal-case text-2xl">Super Chef</Link>
            </div>
            {/* this is for larger device */}
            <div className='ml-auto md:flex gap-5 hidden text-white font-semibold'>
                <ActiveLink to="/" className="btn btn-ghost normal-case text-xl">Home</ActiveLink>
                <ActiveLink to="/blog" className="mx-10 btn btn-ghost normal-case text-xl">Blog</ActiveLink>
                <ActiveLink to="/ourChef" className="mx-10 btn btn-ghost normal-case text-xl">Our Chef</ActiveLink>
                {
                    user ?
                        <div className='flex items-center'>
                            <img title={user.displayName} className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                            <button className="btn btn-info ml-3 text-white lowercase" onClick={handleLogOut}>Logout</button>
                        </div>
                        :
                        <Link to="/login" className='common-button'>Login</Link>
                }
            </div>
            {/* this is for small device */}
            <div className='navbar-end relative  md:hidden '>
                {
                    smallDevice ? <FaTimes className='text-xl' onClick={() => setSmallDevice(!smallDevice)} /> : <FaBars className='text-xl' onClick={() => setSmallDevice(!smallDevice)} />
                }
                {
                    smallDevice && <div data-aos="fade-left" data-aos-duration="1000" className='bg-black ml-auto flex flex-col gap-5 absolute top-10 -right-3.5 p-4 text-white font-semibold'>
                        <img title={user.displayName} className='h-12 w-12 rounded-full' src={user.photoURL} alt="" />
                        <ActiveLink to="/" className="btn btn-ghost normal-case text-xl">Home</ActiveLink>
                        <ActiveLink to="/blog" className="mx-10 btn btn-ghost normal-case text-xl">Blog</ActiveLink>
                        <ActiveLink to="/ourChef" className="mx-10 btn btn-ghost normal-case text-xl">Our Chef</ActiveLink>
                        {
                            user ?
                                <div className='flex items-center'>                                    
                                    <button className="common-button text-white lowercase" onClick={handleLogOut}>Logout</button>
                                </div>
                                :
                                <Link to="/login" className='common-button'>Login</Link>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;