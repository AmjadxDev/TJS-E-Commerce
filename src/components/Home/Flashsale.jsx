import { Card } from "../Index";
import CardData from "../CardData";
import { useState } from "react";

export default function FlashSales() {
  const [cardData, setCardData] = useState(CardData);

  // Filter "sale" category when View All button clicked
  const handleViewAll = () => {
    const saleProducts = CardData.filter((item) => item.category === "sale");
    setCardData(saleProducts);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mt-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          {/* Orange Rectangle + Today’s */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-8 bg-orange-500 rounded-sm"></div>
            <p className="text-red-500 text-lg font-medium">Today’s</p>
          </div>

          {/* Flash Sales (big title below, no rectangle) */}
          <h2 className="text-4xl font-extrabold mt-1">Flash Sales</h2>
        </div>

        {/* Countdown (Static) */}
        <div className="flex items-center gap-6 text-center font-bold">
          <div>
            <p className="text-sm">Days</p>
            <p className="text-2xl ">03</p>
          </div>
          <span className="text-2xl">:</span>
          <div>
            <p className="text-sm">Hours</p>
            <p className="text-2xl">23</p>
          </div>
          <span className="text-2xl">:</span>
          <div>
            <p className="text-sm">Minutes</p>
            <p className="text-2xl">19</p>
          </div>
          <span className="text-2xl">:</span>
          <div>
            <p className="text-sm">Seconds</p>
            <p className="text-2xl">56</p>
          </div>
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

      {/* Cards Section */}
      <Card cardData={cardData} />

      {/* View All Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-md"
          onClick={handleViewAll}
        >
          View All Products
        </button>
      </div>

      {/* Divider */}
      <div className="my-12">
        <hr className="border-t border-gray-300" />
      </div>
    </section>
  );
}
