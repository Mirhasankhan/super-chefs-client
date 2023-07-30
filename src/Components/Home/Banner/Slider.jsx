import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Slider = ({ image }) => {
    const {user} = useContext(AuthContext)
    return (
        <div className='h-64 md:h-[600px]' style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "top center",
            backgroundSize: "100% 100%",
            width: 'full',
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "multiply",            
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center'
        }}>
            <div className='px-6 md:px-24'>
                <h1 className='text-xl md:text-3xl text-white font-semibold'>Welcome To Chef's World</h1>
                <h1 className='text-2xl md:text-5xl text-blue-800 font-semibold my-3'>We are the best around!</h1>
                <Link to={user?.email ? '/ourChef' : '/login'}><button className='btn btn-secondary'>{user?.email ? 'Check Out For Menu' : 'Login To Explore'}</button></Link>
            </div>
            {/* <div>
                <Lottie className='w-full h-full' animationData={toy} loop={true} />
                hello
            </div> */}
        </div>
    );
};

export default Slider;