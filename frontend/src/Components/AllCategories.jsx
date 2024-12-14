import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Minus, Plus } from "lucide-react";

const categoriesData = [
  {
    title: "Jewellery",
    subcategories: ["Ring", "Earrings", "Necklace", "Chain", "All"],
  },
  {
    title: "Electronics",
    subcategories: ["Mobile Phones", "Laptops", "Tablets", "Smartwatches"],
  },
  {
    title: "Fashion",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Clothing",
      "Accessories",
    ],
  },
  {
    title: "Home and Kitchen",
    subcategories: [
      "Furniture",
      "Home Decor",
      "Kitchen Appliances",
      "Cookware",
    ],
  },
  {
    title: "Health and Beauty",
    subcategories: ["Skincare", "Haircare", "Makeup", "Health Supplements"],
  },
  {
    title: "Sports and Fitness",
    subcategories: [
      "Fitness Equipment",
      "Sports Wear",
      "Outdoor Gear",
      "Team Sports",
    ],
  },
  {
    title: "Books and Media",
    subcategories: ["Books", "Music", "Movies", "Video Games"],
  },
  {
    title: "Toys and Games",
    subcategories: ["Toys", "Board Games", "Puzzles", "Outdoor Toys"],
  },
  {
    title: "Baby and Kids",
    subcategories: [
      "Baby Products",
      "Kids' Furniture",
      "Kids' Clothing",
      "Kids' Toys",
    ],
  },
];

const AllCategories = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  return (
    <div className="rounded-md">
      {categoriesData.map((category, index) => (
        <div key={index} className="border-b py-2 ">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory(index)}
          >
            <p className="">{category.title}</p>
            {expandedCategory === index ? (
              <Minus className="text-gray-600" />
            ) : (
              <Plus className="text-gray-600" />
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expandedCategory === index ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <ul className="pl-4 mt-2 space-y-1 text-gray-700">
              {category.subcategories.map((sub, subIndex) => (
                <li
                  key={subIndex}
                  className="hover:text-pink-500 cursor-pointer"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
