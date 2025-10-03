import React from 'react'
import { PiVan } from "react-icons/pi";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { CiHeadphones } from "react-icons/ci";




const Arivals = () => {
  const options=[
     {
      icon:<PiVan />,
      h1:'FREE AND FAST DELIVERY',
      p:'Free delivery for all orders $140'
    },
     {
      icon:<CiHeadphones />,
      h1:'24/7 CUSTOMER SERVICES',
      p:'Friendly 24/7 customers support'
    },
    {
      icon:<RiVerifiedBadgeLine />,
      h1:'MONEY BACK GUARANTEE',
      p:'We return money within 30 days'
    },
  ]
  return (
    <div className="w-full sm:w-[95%] mt-10 mx-auto">
          {/* options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {options.map((items, index) => (
    <div
      key={index}
      className="bg-white p-6 flex flex-col items-center text-center "
    >
      <div className="text-3xl bg-black text-white rounded-full p-2 mb-4 border-8 border-gray-300">{items.icon}</div>

      <h1 className="text-xl font-semibold mb-2">{items.h1}</h1>

      <p className="text-gray-700 ">{items.p}</p>
    </div>
  ))}
</div>


    </div>
  )
}

export default Arivals