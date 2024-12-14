import React from "react";
import FAQ from "../Components/FAQ";
import { useNavigate } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

const FAQPage = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-10">
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
        <p className="text-blue-400">FAQs</p>
      </div>
      <FAQ />
    </div>
  );
};

export default FAQPage;
