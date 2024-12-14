import React, { useContext } from "react";
import { StoreData } from "../Store/StoreContext";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { data } = useContext(StoreData);
  const navigate = useNavigate();
  console.log(data);

  return (
    <div className="m-4 py-1">
      <h1 className="p-2 md:p-4 bg-white   my-6 flex items-center justify-between rounded">
        <p className="text-lg sm:text-xl  md:text-2xl ">
          Today's Popular Product
        </p>
        {/* <p className="underline cursor-pointer">See all categories</p> */}
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-10">
        {data.map((category) => (
          <div
            key={category.id}
            className={` relative rounded-lg overflow-hidden ${category.bgColor} transition-all duration-500 ease-in-out cursor-pointer  flex justify-center items-center sm:items-center sm:justify-start flex-col gap-4 md:p-3  border border-gray-200 `}
            onClick={() => {
              navigate(`/product/${category.id}`);
            }}
          >
            <div className="bg-blue-500 p-1 absolute top-0 left-0 text-white text-sm">
              {category.tags[0].toUpperCase()}
            </div>
            <img
              src={category.img}
              alt={category.name}
              className="object-cover h-48 w-52  rounded "
            />
            <div className=" text-start flex items-start justify-start text-sm sm:text-lg font-bold text-black h-10 md:h-16 ">
              {category.name}
            </div>
            <div className="flex gap-2 items-center">
              <div className="  text-start flex items-start justify-start text-sm  font-bold text-black  ">
                ₹{category.price}
              </div>
              <div className=" text-center flex items-center justify-center text-sm font-bold text-red-500 line-through ">
                ₹{category.original_price}
              </div>
            </div>
            <div className="bg-blue-500 w-full flex items-center justify-center p-1 text-white font-bold rounded hover:bg-black transition-all duration-500">
              View Now
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
