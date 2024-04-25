/** @format */

import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import styles from "../styles/styles.js";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [visible, setVisible] = React.useState(true);
  const [name, setName] = React.useState("");
  const [avatar, setAvatar] = React.useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-xl font-extrabold">
          Register as a new user
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  required
                  value={name}
                  onChange={() => setName(e.target.value)}
                  className="apperance-none block w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400"
                />
              </div>

              <label htmlFor="email" className="block text-sm font-medium">
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

              <label htmlFor="password" className="block text-sm font-medium">
                password
              </label>

              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
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

            <div>
              <label htmlFor="avater" className="text-sm font-medium"></label>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className="h-full w-full object-cover rounded-full"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm txt-sm font-medium text-gray-500"
                >
                  <span>Upload a File</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.png,.jpeg"
                    onChange={handleFileInputChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-ehite bg-blue-600 hover:bg-blue-700"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
