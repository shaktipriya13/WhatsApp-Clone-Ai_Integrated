import React,{useState, useContext} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';
import axios from '../config/axios';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setUser}=useContext(UserContext);

    const navigate = useNavigate();
    function submitHandler(e) {
        e.preventDefault();
        axios.post('/users/register', { email, password })
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('token',res.data);
                setUser(res.data.user);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data);
            });
        }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="p-8 bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                
                <h2 className="text-2xl font-bold text-white mb-6">Register</h2>
                <form
                
                    onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            id="email" 
                            className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
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
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
                <br />
                <p className="text-gray-400 mt-4 my-10 text-center">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
