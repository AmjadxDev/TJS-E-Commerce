import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingCart, FiArrowRight } from "react-icons/fi";



export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            {/* --- Top Bar --- */}
            <div className="bg-black text-white text-sm py-4 px-6 flex justify-around items-center">
                <p>
                    Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
                    <span className="font-semibold cursor-pointer underline">ShopNow</span>
                </p>
                <div className="cursor-pointer">English ▼</div>
            </div>

            {/* --- Main Navbar --- */}
            <nav className="bg-white py-4 px-6 flex justify-around items-center shadow-sm pt-8">
                {/* Logo */}
                <div className="text-2xl font-bold">Exclusive</div>

                {/* Links */}
                <ul className="flex gap-8 text-gray-800 font-medium">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive
                                    ? "underline underline-offset-4 decoration-black"
                                    : ""
                                }`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive
                                    ? "underline underline-offset-4 decoration-black"
                                    : ""
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive
                                    ? "underline underline-offset-4 decoration-black"
                                    : ""
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/signup"
                            className={({ isActive }) =>
                                `hover:text-black ${isActive
                                    ? "underline underline-offset-4 decoration-black"
                                    : ""
                                }`
                            }
                        >
                            Sign Up
                        </NavLink>
                    </li>
                </ul>
                {/* Search + Icons */}
                <div className="flex items-center gap-4">
                    {/* Search Box */}
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-transparent outline-none text-sm"
                        />
                        <FiSearch className="ml-2 text-gray-600 cursor-pointer" />
                    </div>

                    {/* Heart + Cart */}
                    <FiHeart className="text-xl cursor-pointer" />
                    <FiShoppingCart className="text-xl cursor-pointer" />
                </div>

            </nav>
        </header>
    );
}