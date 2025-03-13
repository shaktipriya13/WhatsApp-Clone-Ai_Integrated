import React,{useState, useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import {userContext} from '../context/user.context'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} =useContext(userContext);

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        axios.post('/users/login', { email, password })
            .then((res) => {
                console.log(res.data);

                localStorage.setItem('token',res.data.token);
                setUser(res.data.user);

                navigate('/');
                // means redirect to home page if login success ie. credentials are correct
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            {/* <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl"> */}
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Login</h2>

                <form
                    onSubmit={submitHandler}
                >
                    <div className="mb-4 ">
                        <label className="text-gray-300 text-sm mb-2 font-medium" htmlFor="email">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-y-2">
                        <label className="text-gray-300 text-sm font-medium" htmlFor="password">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-200 shadow-md"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-400 text-sm mt-4 text-center">
                    Don't have an account? <Link to="/register" className="text-blue-400 hover:underline">Create one</Link>
                </p>
            </div>
        </div>

    );
}

export default Login;
