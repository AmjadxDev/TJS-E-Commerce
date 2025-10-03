import React from 'react'

const BestSelling = () => {
    let bestSellingImg = "../../public/images/bottom_banner.jpg";
  return (
    <>
    <img src={bestSellingImg} alt="Best Selling Product" 
    className="w-[80%]  object-cover mx-auto"/>

    
      {/* Divider */}
      <div className="my-12">
        {/* <hr className="border-t border-gray-300" /> */}
      </div>
    </>
  )
}

export default BestSelling