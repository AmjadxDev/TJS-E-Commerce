import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";


const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6">
            {/* --- Sidebar Categories --- */}
            <div className="col-span-3 border-r border-gray-400">
                <ul className="space-y-4 font-medium text-gray-700  mt-8">
                    <li className="flex justify-around items-center cursor-pointer">
                        Woman’s Fashion <span>›</span>
                    </li>
                    <li className="flex justify-around items-center cursor-pointer">
                        Men’s Fashion <span>›</span>
                    </li>
                </ul>
            </div>

            {/* --- Hero Banner --- */}
            <div className="col-span-9 relative mt-8">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{
                        delay: 3000, // 3 seconds
                        disableOnInteraction: false, // keep autoplay after manual swipe
                    }}
                    className="col-span-9 custom-swiper"
                >
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/9430775/pexels-photo-9430775.jpeg" alt="Hero Banner" className="object-cover w-full h-[350px]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/9430775/pexels-photo-9430775.jpeg" alt="Hero Banner" className="object-cover w-full h-[350px]" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images.pexels.com/photos/9430775/pexels-photo-9430775.jpeg" alt="Hero Banner" className="object-cover w-full h-[350px]" />
                    </SwiperSlide>
                </Swiper>

                <div className="absolute top-1/4 left-12 text-white space-y-4 z-10">
                    <h2 className="text-5xl leading-14 font-bold flex justify-center">Up to 10% <br />off Voucher</h2>
                    <button className="flex items-center gap-2 text-white px-4 py-2 rounded-md font-medium underline underline-offset-4 cursor-pointer bg-black hover:bg-gray-800 transition">
                        Shop Now <FiArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
