import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const Card = ({ cardData }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      spaceBetween={20}
      slidesPerView={4} // Number of cards visible at once
      loop={false} // stop looping
    >
      {cardData.map((currentElement) => {
        const { id, percent, name, price, discount, imagePath } = currentElement;

        return (
          <SwiperSlide key={id}>
            <div className="border p-4 rounded-md relative">
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                {percent}
              </span>

              {/* Product Image */}
              <img
                src={imagePath}
                alt={name}
                className="w-full h-40 object-contain mb-4"
              />

              {/* Product Details */}
              <h3 className="text-sm font-medium mb-2">{name}</h3>
              <p className="text-red-500 font-bold">
                {price}
                <span className="line-through text-gray-400 ml-2">
                  {discount}
                </span>
              </p>

              {/* Add to Cart */}
              <button className="w-full bg-black text-white py-2 mt-3">
                Add To Cart
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Card;
