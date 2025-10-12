import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="px-6 md:px-20 py-10 bg-white">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-8">
        <span className="hover:text-black cursor-pointer">Home</span> /{" "}
        <span className="text-black font-medium">Contact</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* --- Left Contact Info Box --- */}
        <div className="border rounded-md shadow-sm p-8 space-y-8">
          {/* Call Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FiPhone className="text-red-500 text-xl" />
              </div>
              <h2 className="font-semibold text-lg">Call To Us</h2>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-gray-800 font-medium">Phone: +8801611112222</p>
            <hr className="my-6" />
          </div>

          {/* Write Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FiMail className="text-red-500 text-xl" />
              </div>
              <h2 className="font-semibold text-lg">Write To Us</h2>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <div className="text-gray-800 text-sm space-y-1">
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
        </div>

        {/* --- Right Contact Form --- */}
        <div className="border rounded-md shadow-sm p-8">
          <form className="space-y-6">
            {/* Input Fields */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-400 bg-gray-50"
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-400 bg-gray-50"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-400 bg-gray-50"
              />
            </div>

            {/* Message Field */}
            <textarea
              placeholder="Your Message"
              rows="6"
              className="w-full border rounded-md px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-red-400 bg-gray-50"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="bg-red-500 text-white font-medium py-3 px-8 rounded-md hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
