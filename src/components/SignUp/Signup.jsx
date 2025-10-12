import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side – Lifestyle Image */}
        <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/9430775/pexels-photo-9430775.jpeg')" }}>
          {/* You can replace '/your-image-path.jpg' with an actual image path or use a <img> tag if preferred */}
        </div>

        {/* Right Side – Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Create an account</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition"
            >
              Create Account <FiArrowRight />
            </button>
          </form>

          <div className="mt-6 text-center">
            <button className="flex items-center justify-center gap-2 border border-gray-300 py-2 px-4 rounded-md w-full hover:bg-gray-50">
              <FcGoogle className="text-xl" />
              Sign up with Google
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
