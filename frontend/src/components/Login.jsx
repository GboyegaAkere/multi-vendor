import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles.js";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [visible, setVisible] = React.useState(true);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-xl font-extrabold">
                    Login into your account
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="email"
                                    required
                                    value={email}
                                    onChange={() => setEmail(e.target.value)}
                                    className="apperance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                                />
                            </div>

                            <label
                                htmlFor="password"
                                className="block text-sm font-medium"
                            >
                                password
                            </label>

                            <div className="mt-1 relative">
                                <input
                                    type={visible ? "text": "password"}
                                    name="password"
                                    autoComplete="current-password"
                                    placeholder="password"
                                    required
                                    value={password}
                                    onChange={() => setPassword(e.target.value)}
                                    className="apperance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                                />
                                {visible ? (
                                    <AiOutlineEye
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(false)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        className="absolute right-2 top-2 cursor-pointer"
                                        size={25}
                                        onClick={() => setVisible(true)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={`${styles.normalFlex} justify-between`}>
                         <div className={`${styles.normalFlex}`}>
                            <input type="checkbox" name="remember-me" id="remember-me" className="h-4 w-4 text-blue-600 border-gray-300 rounded"/>
                            <label htmlFor="remember-me" className="ml-2 block text-gray-900">Remember me</label>
                         </div>
                         <a href="#" className="font-medium text-blue-500 hover:text-blue-500">Forgot your password ?</a>
                        </div>
                        <div>
                            <button type="submit" className="group relative w-full h-[40px flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-ehite bg-blue-600 hover:bg-blue-700">Login</button>
                        </div>
                        <div className={`${styles.normalFlex} w-full`}>
                            <h4>create an account</h4>
                            <Link to="/signup" className="text-blue-600 pl-4">Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
