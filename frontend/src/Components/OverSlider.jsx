import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const OverSlider = () => {
  const content = [
    "Electronics Mega Sale: Up to 40% Off!",
    "Free worldwide shipping over $200.",
    "New Arrivals: Up to 50% Off.",
    "Exclusive offers and discounts.",
    "Limited time offer: 20% off on all electronics.",
    "New products: 15% off.",
    "Exclusive deals and promotions.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % content.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + content.length) % content.length);
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-10 w-full min-w-full text-black text-center text-sm"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-[20%] top-1/2  transform -translate-y-1/2 text-gray-500 p-2 rounded-full"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-[20%] top-1/2 transform -translate-y-1/2  text-gray-500 p-2 rounded-full"
      >
        <FiChevronRight size={24} />
      </button>

     
    </div>
  );
};

export default OverSlider;
