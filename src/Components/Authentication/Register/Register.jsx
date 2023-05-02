import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)
    const handleRegister = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const name = form.name.value
        const password = form.password.value
        const photoURL = form.photoURL.value;
        setError('')

        if(password.length < 6){
            setError('Password must be 6 characters or longer.')
            return
        }
        createUser(email, password)
        .then(result =>{
            const newUser = result.user           
            updateUserData(newUser, name, photoURL)
        })
        .catch(error => setError(error.message))
        
        form.reset()
    }

    const updateUserData = (currentUser,name, image)=>{
        updateProfile(currentUser, {
            displayName : name,
            photoURL : image
            
        })
        .then(() => {})
        .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-2">Register to Super-Chef!</h1>
                </div>
                <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input required type="text" name='photoURL' placeholder="upload image" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link className='btn-link' to="/login">Login</Link></p>
                    </div>
                    
                </form>
                <p className='text-red-400'>{error}</p>
            </div>
        </div>
    );
};

export default Register;