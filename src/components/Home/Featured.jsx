import React from 'react'


const Featured = () => {
  const imgOne = "../../public/images/featured_one.png"
  const imgTwo = "../../public/images/featured_two.png"
  const imgThree = "../../public/images/featured_three.png"
  const imgFour = "../../public/images/featured_four.png"
  return (
    
    <section className="max-w-7xl mx-auto px-6 mt-12">
    
    <div className="w-full bg-white flex flex-col md:flex-row gap-6 p-6">
        
      
      {/* Left Section - Man */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center rounded-xl overflow-hidden">
  <img
    src={imgOne}
    alt="main"
    className="bg-black w-full h-[400px] md:h-[600px] object-cover rounded-xl"
  />
  {/* Overlay text */}
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-end items-start text-white p-6">
    <h1 className="text-2xl md:text-4xl font-bold">Men's Fashion World</h1>
    <p className="mt-2 text-sm md:text-base">
      Black and white version of men's clothes coming out on sale
    </p>
    <button className="mt-4 px-6 py-2 rounded-lg">
      Shop Now
    </button>
  </div>
</div>


      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">

        {/* Single Image - text left, img right */}
        <div className="relative flex justify-end items-center rounded-xl overflow-hidden">
          <img
            src={imgTwo}
            alt="top"
            className="w-full h-[200px] md:h-[300px] object-cover rounded-xl bg-black"
          />
          {/* Overlay text */}
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6">
            <h2 className="text-xl md:text-2xl font-bold">Women's Collection</h2>
            <p className="mt-1 text-sm md:text-base">Featured women's collection that gives you another vibe.</p>
            <button className="mt-3 px-4 py- rounded-lg transition">Shop Now</button>
          </div>
        </div>

        {/* Two Images  */}
        <div className="flex flex-col sm:flex-row gap-6">
          {/* First */}
          <div className="relative w-full sm:w-1/2 rounded-xl overflow-hidden">
            <img
              src={imgThree}
              alt="bottom-left"
              className="bg-black w-full h-[200px] md:h-[250px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Women's Fashion</h2>
              <p className="mt-1 text-xs md:text-sm">Featured women's collection that gives you another vibe.</p>
              <button className="mt-2 px-3 py-1 rounded-md ">Shop Now</button>
            </div>
          </div>

          {/* Second */}
          <div className="relative w-full sm:w-1/2 rounded-xl overflow-hidden">
            <img
              src={imgFour}
              alt="bottom-right"
              className="bg-black w-full h-[200px] md:h-[250px] object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 text-center">
              <h2 className="text-lg md:text-xl font-bold">Women's</h2>
              <p className="mt-1 text-xs md:text-sm">Featured women's collection that gives you another vibe.</p>
              <button className="mt-2 px-3 py-1 rounded-md ">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  )
}

export default Featured
