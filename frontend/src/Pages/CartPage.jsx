import React, { useState } from "react";
import { MdChevronRight, MdDelete } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 49.99,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1549400854-b4300f444934?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with product image URL
    },
    {
      id: 2,
      name: "Smartphone Case",
      price: 19.99,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with product image URL
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen">
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
        <p className="text-blue-400">Cart</p>
      </div>

      {/* Cart Content */}
      <div className="p-6">
        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="flex-1">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4 flex-wrap gap-10"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1 px-4">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-10 h-10 border rounded-full hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-4 flex items-center justify-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-10 h-10   border rounded-full hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-black text-2xl ml-4 "
                  >
                    <MdDelete />
                  </button>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="w-full max-w-sm p-6 border rounded-lg shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${calculateTotal()}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium">$5.99</p>
              </div>
              <hr />
              <div className="flex justify-between font-bold text-lg mt-4">
                <p>Total</p>
                <p>${(parseFloat(calculateTotal()) + 5.99).toFixed(2)}</p>
              </div>
              <button
                className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 mt-4"
                onClick={() => alert("Proceed to Checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">Your cart is empty.</p>
            <Link
              to="/products"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
