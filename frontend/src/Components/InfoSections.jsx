import React from "react";
import { FaTags, FaUndo, FaLock, FaHeadset } from "react-icons/fa";

const InfoSections = () => {
  const data = [
    {
      id: 1,
      title: "Daily deals",
      description: "Items you love at prices that fit your budget",
      icon: <FaTags className="text-blue-500 text-3xl" />,
    },
    {
      id: 2,
      title: "08-Days return policy",
      description: "Merchandise must be returned within 60 days.",
      icon: <FaUndo className="text-green-500 text-3xl" />,
    },
    {
      id: 3,
      title: "Secure payment method",
      description: "Pay with popular and secure payment methods",
      icon: <FaLock className="text-yellow-500 text-3xl" />,
    },
    {
      id: 4,
      title: "Help center 24/7",
      description: "Want to talk to a person? choose chat or call us",
      icon: <FaHeadset className="text-red-500 text-3xl" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  p-6">
      {data.map((section) => (
        <div
          key={section.id}
          className="flex items-start p-4 bg-white rounded-lg  transition-shadow"
        >
          <div className="mr-4">{section.icon}</div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            <p className="text-gray-600 text-sm">{section.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoSections;
