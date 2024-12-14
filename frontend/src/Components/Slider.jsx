import React from "react";
// Import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  const categories = [
    {
      id: 1,
      name: "Jewellery",
      image: "./ban1.webp",
      bgColor: "bg-rose-100",
    },
    {
      id: 2,
      name: "Electronics",
      image: "./ban2.webp",
      bgColor: "bg-cyan-100",
    },
    {
      id: 3,
      name: "Fashion",
      image: "./ban3.webp",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      name: "Home and Kitchen",
      image: "./ban4.webp",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="m-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          1024: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000, // 3 seconds
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className={`h-full w-full  transition-transform duration-500 ease-in-out cursor-pointer  flex items-center justify-center`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full"
              />
              {/* <p className="mt-4 text-sm font-bold text-black">
                {category.name}
              </p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
