import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side – Lifestyle Image */}
        <div className="hidden md:block bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/9430775/pexels-photo-9430775.jpeg')" }}>
          {/* Replace '/your-image-path.jpg' with your actual image path */}
        </div>

        {/* Right Side – Forgot Password Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Forgot Password</h2>
          <p className="text-sm text-gray-600 mb-6">Enter your email or phone number to receive a reset link</p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email / Phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
            >
              Send Email
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link to="/login" className="text-sm text-red-600 hover:underline">
              Try Another Way
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
