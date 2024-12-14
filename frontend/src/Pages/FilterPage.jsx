import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const FilterPage = () => {
  // Filter states
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [material, setMaterial] = useState("");
  const [brand, setBrand] = useState("");

  const handlePriceChange = (e) => {
    setPriceRange([e.target.value[0], e.target.value[1]]);
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  return (
    <div className="w-full lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-4">
          <FaFilter className="inline mr-2" /> Filters
        </h2>

        {/* Price Range Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange}
            onChange={handlePriceChange}
            className="w-full mt-2"
          />
          <p className="text-sm text-gray-600">
            {priceRange[0]} - {priceRange[1]} INR
          </p>
        </div>

        {/* Material Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Material
          </label>
          <select
            value={material}
            onChange={handleMaterialChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">All</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <select
            value={brand}
            onChange={handleBrandChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="">All</option>
            <option value="Tanishq">Tanishq</option>
            <option value="Malabar Gold">Malabar Gold</option>
            <option value="Kalyan">Kalyan</option>
          </select>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPage;
