import React from "react";
import { FaTags, FaUndo, FaLock, FaHeadset } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alone Boy",
      role: "Manager",
      rating: "5 | 5 Reviews",
      feedback:
        "They have definitely secured their place as top of the line, noise cancelling, earbuds in my book.’’",
    },
    {
      id: 2,
      name: "Nadine R. Creech",
      role: "CEO",
      rating: "4 | 5 Reviews",
      feedback:
        "I'm judging these earphones with extremely critical ear and I think they perform extremely well.",
    },
    {
      id: 3,
      name: "Angelo H. Lott",
      role: "Manager",
      rating: "3.5 | 5 Reviews",
      feedback:
        "I recently purchased these headphones and by the audio quality. The bass is punchy.’’",
    },
    {
      id: 4,
      name: "Alexander Ball",
      role: "Manager",
      rating: "4.5 | 5 Reviews",
      feedback:
        "These headphones seamlessly connect to all my devices. The Bluetooth pairing is hassle-free’’",
    },
    {
      id: 5,
      name: "Stefanie Rashford",
      role: "Manager",
      rating: "5 | 5 Reviews",
      feedback:
        "Not only do these headphones deliver exceptional audio, but they also look and feel great.’’",
    },
  ];

  return (
    <div>
      {/* Reviews Section */}
      <div className="bg-gray-100 py-6">
        <h2 className="m-6 bg-white p-2 md:p-4 rounded text-lg md:text-2xl lg:text-3xl text-gray-800 mb-6">
          Loved by Customers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 bg-white shadow-md rounded-lg flex items-center justify-center flex-col">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 mb-2">{review.role}</p>
              <p className="text-sm text-yellow-500 font-semibold mb-2">
                {review.rating}
              </p>
              <p className="text-gray-600 text-center">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
