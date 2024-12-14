import React, { useState } from "react";
import { FaUsers, FaBoxOpen, FaTruck, FaStar } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { MdChevronRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [countStarted, setCountStarted] = useState(false);

  if (inView && !countStarted) {
    setCountStarted(true);
  }

  return (
    <div>
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
        <p className="text-blue-400">About Us</p>
      </div>

      <section
        className="relative bg-cover text-black py-20"
        style={{
          backgroundImage: 'url("https://example.com/bg-image.jpg")',
        }}
      >
        <div className="absolute inset-0  bg-opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4 text-blue-500">
            Your One-Stop Shop for Everything You Love
          </h1>
          <p className="text-lg mb-8">
            Welcome to SkyWorld, where we redefine online shopping with a wide
            range of premium products tailored to your needs. Whether you're
            upgrading your wardrobe, enhancing your home, or gearing up for an
            adventure, we’ve got you covered. Explore our carefully curated
            categories and experience unparalleled quality, unbeatable prices,
            and exceptional customer service.
          </p>
          <div className="my-12">
            <h3 className="text-2xl font-semibold">Meet Our Team</h3>
            <p className="text-lg mt-2">Sunil Kumar Gupta, Product Manager</p>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            ref={ref}
          >
            <StatCard
              Icon={FaUsers}
              label="Happy Customers"
              end={5859}
              inView={countStarted}
            />
            <StatCard
              Icon={FaBoxOpen}
              label="Products in Stock"
              end={5260}
              inView={countStarted}
            />
            <StatCard
              Icon={FaTruck}
              label="One Week Deliveries"
              end={9685}
              inView={countStarted}
            />
            <StatCard
              Icon={FaStar}
              label="E-commerce Score"
              end={100}
              inView={countStarted}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ Icon, label, end, inView }) => (
  <div className="flex flex-col items-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
    <Icon className="text-4xl text-yellow-500 mb-4" />
    <h2 className="text-3xl font-bold">
      {inView && <CountUp start={0} end={end} duration={2} />}
    </h2>
    <p className="text-lg mt-2">{label}</p>
  </div>
);

export default AboutUs;
