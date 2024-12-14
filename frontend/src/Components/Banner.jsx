import React from "react";

const Banner = () => {
  return (
    <div className="grid gap-4  sm:grid-cols-2 mx-4  sm:mx-10">
      {/* Banner 1 */}
      <div
        className="relative h-64 sm:h-full bg-cover bg-center rounded "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586182987320-4f376d39d787?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-2xl font-bold">10% off</h2>
          <p className="text-lg">On the gaming device</p>
          <p className="text-sm mt-2">
            Gaming device day with a thrilling experience
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-white hover:text-black transition-all duration-500 text-white rounded">
            Buy Now
          </button>
        </div>
      </div>

      {/* Banner 2 */}

      <div className="grid gap-4 ">
        <div
          className="relative h-64 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515703817793-511cee221bb9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-2xl font-bold">50% off</h2>
            <p className="text-lg">On the windows laptop</p>
            <p className="text-sm mt-2">
              Windows laptop day with a productive workflow
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600  hover:bg-white hover:text-black transition-all duration-500 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>

        {/* Banner 3 */}
        <div
          className="relative h-64 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-2xl font-bold">30% off</h2>
            <p className="text-lg">On the windows watch</p>
            <p className="text-sm mt-2">
              Windows watch day with a productive schedule
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600  hover:bg-white hover:text-black transition-all duration-500 text-white rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
