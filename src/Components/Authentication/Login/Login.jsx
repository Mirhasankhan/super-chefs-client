import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState("")
    const {signIn} = useContext(AuthContext)
    const handleLogin = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value        
        const password = form.password.value
        setError("")
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            setError(error.message)
        })
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-2">Login to Super-Chef!</h1>
                    
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p>Don't have an account? <Link className='btn-link' to="/register">Register</Link></p>
                    </div>
                </form>
                <p className='text-red-400'>{error}</p>
            </div>
        </div>
    );
};

export default Login;