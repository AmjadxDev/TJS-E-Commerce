import React from 'react'
import CategoryData from './CategoryData'

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          {/* Orange Rectangle + Categories */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-8 bg-orange-500 rounded-sm"></div>
            <p className="text-red-500 text-lg font-medium">Categories</p>
          </div>

          <h2 className="text-4xl font-extrabold mt-1">Browse By Category</h2>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-4">
          {/* Left Button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Button */}
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Cards Section in Single Row */}
      <div className="flex gap-6 overflow-x-auto pb-4">
        {CategoryData.map((currentElement, index) => (
          <div
            key={index}
            className="w-48 h-56 flex-shrink-0 border-2 border-gray-700 rounded-md flex flex-col items-center justify-between p-4 hover:shadow-md cursor-pointer"
          >
            {/* Image */}
            <img
              src={currentElement.image}
              alt={currentElement.title}
              className="w-32 h-32 object-contain"
            />
            {/* Title */}
            <p className="text-lg font-medium mt-2">{currentElement.title}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="my-12">
        <hr className="border-t border-gray-300" />
      </div>
    </section>
  )
}

export default Categories
