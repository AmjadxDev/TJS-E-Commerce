import React from "react";
import {
  FiTruck,
  FiHeadphones,
  FiRefreshCw,
  FiUsers,
  FiShoppingBag,
  FiGift,
  FiDollarSign,
} from "react-icons/fi";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="px-6 md:px-20 py-10 bg-white">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span className="hover:text-black cursor-pointer">Home</span> /{" "}
        <span className="text-black font-medium">About</span>
      </div>

      {/* Our Story Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Exclusive has more than 1 million products to offer, growing at a
            very fast pace. Exclusive offers a diverse assortment in categories
            ranging from consumer products to lifestyle items.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1585386959984-a4155224a1fc?auto=format&fit=crop&w=800&q=80"
          alt="Our Story"
          className="rounded-md w-full h-auto object-cover"
        />
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <div className="border p-6 rounded-md flex flex-col items-center justify-center text-center">
          <FiUsers className="text-3xl mb-3 text-black" />
          <h3 className="font-semibold text-xl">10.5k</h3>
          <p className="text-gray-600 text-sm">Sellers active on our site</p>
        </div>

        <div className="border p-6 rounded-md flex flex-col items-center justify-center text-center bg-red-500 text-white">
          <FiDollarSign className="text-3xl mb-3" />
          <h3 className="font-semibold text-xl">33k</h3>
          <p className="text-sm">Monthly Product Sale</p>
        </div>

        <div className="border p-6 rounded-md flex flex-col items-center justify-center text-center">
          <FiGift className="text-3xl mb-3 text-black" />
          <h3 className="font-semibold text-xl">45.5k</h3>
          <p className="text-gray-600 text-sm">Customers active on our site</p>
        </div>

        <div className="border p-6 rounded-md flex flex-col items-center justify-center text-center">
          <FiShoppingBag className="text-3xl mb-3 text-black" />
          <h3 className="font-semibold text-xl">25k</h3>
          <p className="text-gray-600 text-sm">Annual gross sale on our site</p>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {/* Member 1 */}
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Tom Cruise"
            className="rounded-md w-full h-[320px] object-cover mb-4"
          />
          <h3 className="font-semibold text-lg">Tom Cruise</h3>
          <p className="text-gray-500 text-sm mb-3">Founder & Chairman</p>
          <div className="flex justify-center gap-3 text-gray-600 text-lg">
            <FaTwitter className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaLinkedin className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Member 2 */}
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Emma Watson"
            className="rounded-md w-full h-[320px] object-cover mb-4"
          />
          <h3 className="font-semibold text-lg">Emma Watson</h3>
          <p className="text-gray-500 text-sm mb-3">Managing Director</p>
          <div className="flex justify-center gap-3 text-gray-600 text-lg">
            <FaTwitter className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaLinkedin className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Member 3 */}
        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/men/12.jpg"
            alt="Will Smith"
            className="rounded-md w-full h-[320px] object-cover mb-4"
          />
          <h3 className="font-semibold text-lg">Will Smith</h3>
          <p className="text-gray-500 text-sm mb-3">Product Designer</p>
          <div className="flex justify-center gap-3 text-gray-600 text-lg">
            <FaTwitter className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaLinkedin className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Features Section */}
      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <div className="bg-black text-white p-3 rounded-full">
            <FiTruck className="text-2xl" />
          </div>
          <h4 className="font-semibold">FREE AND FAST DELIVERY</h4>
          <p className="text-gray-500 text-sm">
            Free delivery for all orders over $140
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="bg-black text-white p-3 rounded-full">
            <FiHeadphones className="text-2xl" />
          </div>
          <h4 className="font-semibold">24/7 CUSTOMER SERVICE</h4>
          <p className="text-gray-500 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="bg-black text-white p-3 rounded-full">
            <FiRefreshCw className="text-2xl" />
          </div>
          <h4 className="font-semibold">MONEY BACK GUARANTEE</h4>
          <p className="text-gray-500 text-sm">
            We return money within 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
