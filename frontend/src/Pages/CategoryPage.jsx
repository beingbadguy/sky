import React from "react";
import ShopByCategories from "../Components/ShopByCategories";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[50vh] mb-10">
      <div className="flex items-center gap-1 p-4 bg-gray-100">
        <p
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <MdChevronRight />
        <p className="text-blue-400">All Categories</p>
      </div>
      <ShopByCategories />
    </div>
  );
};

export default CategoryPage;
