import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(null);

  const toggleAnswer = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <div className=" py-6 ">
      <h2 className="m-6 bg-gray-200 p-2 md:p-4 rounded text-lg md:text-2xl lg:text-3xl text-gray-800 mb-6">
        FAQs
      </h2>

      <div className="px-4 space-y-4 max-w-4xl mx-auto">
        {/* FAQ 1 */}
        <div className="border-b">
          <div
            onClick={() => toggleAnswer(0)}
            className="flex justify-between items-center cursor-pointer py-3"
          >
            <h3 className="md:text-xl font-medium">
              What are tablets, and how do they differ from smartphones and
              laptops?
            </h3>
            {isOpen === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen === 0 && (
            <p className="text-gray-600">
              Tablets are portable touchscreen devices that are larger than
              smartphones but more compact than laptops. They are primarily used
              for browsing, media consumption, and light productivity tasks.
            </p>
          )}
        </div>

        {/* FAQ 2 */}
        <div className="border-b">
          <div
            onClick={() => toggleAnswer(1)}
            className="flex justify-between items-center cursor-pointer py-3"
          >
            <h3 className="md:text-xl font-medium">
              What types of electronics products do you offer?
            </h3>
            {isOpen === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen === 1 && (
            <p className="text-gray-600">
              We offer a wide range of electronics including smartphones,
              tablets, laptops, gaming devices, smartwatches, and accessories.
            </p>
          )}
        </div>

        {/* FAQ 3 */}
        <div className="border-b">
          <div
            onClick={() => toggleAnswer(2)}
            className="flex justify-between items-center cursor-pointer py-3"
          >
            <h3 className="md:text-xl font-medium">
              What payment methods do you accept?
            </h3>
            {isOpen === 2 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen === 2 && (
            <p className="text-gray-600">
              We accept various payment methods, including credit/debit cards,
              PayPal, and other secure online payment options. You can find the
              full list during the checkout process.
            </p>
          )}
        </div>

        {/* FAQ 4 */}
        <div className="border-b">
          <div
            onClick={() => toggleAnswer(3)}
            className="flex justify-between items-center cursor-pointer py-3"
          >
            <h3 className="md:text-xl font-medium">
              Do you offer warranties on your products?
            </h3>
            {isOpen === 3 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {isOpen === 3 && (
            <p className="text-gray-600">
              Yes, we offer warranties on most of our products. The warranty
              period and terms vary depending on the product and brand. Please
              refer to the product page for more details.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
