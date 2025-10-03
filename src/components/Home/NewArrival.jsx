import React from 'react'

const NewArrival = () => {
  return (
    <>
    <section  className="max-w-7xl mx-auto px-6 mt-12">
         {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          {/* Orange Rectangle + Categories */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-8 bg-orange-500 rounded-sm"></div>
            <p className="text-red-500 text-lg font-medium">Featured</p>
          </div>

          <h2 className="text-4xl font-extrabold mt-1">New Arrival</h2>
        </div>
         <div className="my-12">
         </div>
        </div>
    </section>
    </>
  )
}

export default NewArrival