import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-10 py-12 pt-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

                {/* Exclusive */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Exclusive</h2>
                    <p className="mb-2">Subscribe</p>
                    <p className="mb-4">Get 10% off your first order</p>
                    <div className="flex">

                        <div className="relative w-72">
                            {/* Input Field */}
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full p-3 pr-12 border border-gray-400 rounded bg-black text-white placeholder-gray-400 focus:outline-none"
                            />

                            {/* Icon Button */}
                            <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                <img
                                    src="../../public/images/icon-send.png" // <-- put your icon in /public/send-icon.png
                                    alt="send"
                                    className="w-5 h-5"
                                />
                            </button>
                        </div>

                    </div>
                </div>

                {/* Support */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Support</h2>
                    <p>111 Bijoy sarani, Dhaka,</p>
                    <p>DH 1515, Bangladesh.</p>
                    <p className="mt-2">exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>

                {/* Account */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Account</h2>
                    <ul className="space-y-2">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Quick Link</h2>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Download App */}
                <div>
                    <h2 className="text-xl font-bold mb-4">Download App</h2>
                    <p className="text-sm mb-2">Save $3 with App New User Only</p>
                    <div className="flex gap-2 mb-4">
                        <img src="../../../public/images/qr_code_scanner.png" alt="QR Code" className="w-20 h-20" />
                        <div className="flex flex-col gap-2">
                            <img src="../../../public/images/btn_google_play.png" alt="Google Play" className="w-28" />
                            <img src="../../../public/images/btn_app_store.png" alt="App Store" className="w-28" />
                        </div>
                    </div>
                    <div className="flex gap-4 text-lg">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                © Copyright Rimel 2022. All rights reserved
            </div>
        </footer>
    );
}