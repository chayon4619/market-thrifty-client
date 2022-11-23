import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center my-10 mx-2'>
            <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-2xl bg-gray-100 text-gray-900">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block text-gray-900">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300 text-gray-900 focus:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-300 text-gray-900 focus:border-violet-400" />
                        <div className="flex justify-end text-xs text-gray-900">
                            <Link to="/">Forgot Password?</Link>
                        </div>
                    </div>
                    <button className="block w-full p-3 btn btn-outline text-center font-bold rounded-lg text-gray-900">Log in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-900">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button className="block w-full p-3 btn btn-outline text-center font-bold rounded-lg text-gray-900">Sign In With Google</button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-900">Don't have an account?
                    <Link to="/register" className="underline text-gray-900">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;