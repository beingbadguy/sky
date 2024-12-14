import React, { useContext, useEffect, useState } from "react";
import {
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaSearchPlus,
  FaSearchMinus,
} from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { StoreData } from "../Store/StoreContext";
import { CiBookmark, CiMail } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";

const ProductPage = () => {
  const { data } = useContext(StoreData);
  const navigate = useNavigate();
  const { id } = useParams();
  const [isWishlist, setIsWishlist] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [showOverlay, setShowOverlay] = useState(false);
  const [zoom, setZoom] = useState(1);

  const product = data.find((pro) => pro.id === parseInt(id));
  const suggestedProducts = data.filter((pro) => pro.id !== parseInt(id));

  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
  };

  const addToCart = () => {
    alert(`${product.name} (x${quantity}) has been added to your cart!`);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    setZoom(1); // Reset zoom level when overlay is toggled
  };

  const zoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.1);
  };

  const zoomOut = () => {
    if (zoom > 1) setZoom((prevZoom) => prevZoom - 0.1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen">
      {/* Overlay */}
      {showOverlay && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <img
              src={product.img}
              alt={product.name}
              style={{ transform: `scale(${zoom})` }}
              className="max-w-[90vw] max-h-[90vh] object-contain transition-transform duration-300"
            />
            <button
              onClick={toggleOverlay}
              className="absolute top-4 right-4 bg-gray-100 text-black p-2 rounded-full hover:bg-gray-200 transition"
            >
              <TfiClose size={20} />
            </button>
            <div className="absolute bottom-4 right-4 flex gap-4">
              <button
                onClick={zoomOut}
                className={`${
                  zoom > 1 ? "" : "hidden"
                } bg-gray-100 text-black flex items-center justify-center p-2 rounded-full hover:bg-gray-300 transition`}
              >
                <AiOutlineMinus />
              </button>
              <button
                onClick={zoomIn}
                className="bg-gray-100 text-black flex items-center justify-center p-2 rounded-full hover:bg-gray-300 transition"
              >
                <GoPlus />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
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
        <p className="text-blue-400">{product.name}</p>
      </div>

      {/* Product Content */}
      <div className="p-6 flex flex-col md:flex-row gap-8 items-center md:justify-start justify-between w-full">
        {/* Product Image */}
        <div className="flex-1 max-w-sm">
          <img
            src={product.img}
            alt={product.name}
            className="w-full rounded-lg shadow-md cursor-pointer"
            onClick={toggleOverlay}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex items-start justify-center flex-col ">
          <div className="text-gray-400 mb-4 flex items-center gap-1">
            <CiBookmark />
            {product.category}
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="text-lg font-medium text-gray-600 mb-2 flex items-center gap-1">
            <CiMail />
            Sold By:{" "}
            <span className="text-blue-500">
              {product.sold_by || "Unknown Seller"}
            </span>
          </div>
          <div className="flex gap-2 ">
            {product.tags.map((tag, index) => (
              <span
                key={index}
                className="text-gray-500 text-sm bg-blue-100 p-1 my-4"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            <p className="text-2xl font-bold text-blue-500 mb-6">
              ₹{product.price.toFixed(2)}
            </p>
            <p className="text-2xl font-bold text-red-500 mb-6 line-through">
              ₹{product.original_price.toFixed(2)}
            </p>
          </div>

          <div className="w-full h-[1px] bg-gray-200 my-4"></div>
          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={decreaseQuantity}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-300"
            >
              -
            </button>
            <p className="font-medium w-4 flex items-center justify-center">
              {quantity}
            </p>
            <button
              onClick={increaseQuantity}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-300"
            >
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 flex-col md:flex-row w-full">
            <button
              onClick={addToCart}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 w-full justify-center "
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            <button
              onClick={toggleWishlist}
              className={`flex items-center gap-2 px-6 py-2 border rounded-md ${
                isWishlist ? "border-red-500 text-red-500" : "border-gray-300"
              } hover:bg-gray-100 transition-all duration-300 w-full justify-center`}
            >
              <FaHeart />
              {isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {/* About Product */}
      <div className="p-6 bg-gray-100 mt-6 rounded-md">
        <h2 className="text-2xl font-semibold mb-4">About this Product</h2>
        <p className="text-gray-600">
          {product.about ||
            "Detailed information about the product goes here. This section can include specifications, features, and other details."}
        </p>
      </div>

      {/* Suggested Products */}
      <div className="p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-4">You May Also Like</h2>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-10">
          {suggestedProducts.map((category) => (
            <div
              key={category.id}
              className={` relative rounded-lg overflow-hidden ${category.bgColor} transition-all duration-500 ease-in-out cursor-pointer  flex justify-center items-center sm:items-center sm:justify-start flex-col gap-4 md:p-3   border border-gray-200 `}
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
              <div className="bg-blue-500 w-full flex items-center justify-center p-1 text-white font-bold rounded hover:bg-blue-600 transition-all duration-500">
                View Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
