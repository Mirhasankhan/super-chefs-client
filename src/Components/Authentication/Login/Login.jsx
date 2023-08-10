import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { useEffect } from 'react';

const Login = () => {
    const [error, setError] = useState("")
    const { signIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        setError("")
        signIn(email, password)
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
            })
        form.reset()
    };

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(error => { })
    };
    const handleGithubLogin = () => {
        loginWithGithub()
            .then(() => {
                navigate(from, { replace: true })
            })
            .catch(() => {})
    }
    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold my-2">Login to Super-Chef!</h1>
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-purple-400">
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
                <p>or</p>
                <button onClick={handleGoogleLogin} className="btn btn-outline btn-warning w-full">
                    <FaGoogle className='pr-1' /> Login With Google
                </button>
                <button onClick={handleGithubLogin} className="btn btn-outline btn-secondary w-full">
                    <FaGithub className='pr-1' />Login With Github
                </button>
            </div>
        </div>
    );
};

export default Login;