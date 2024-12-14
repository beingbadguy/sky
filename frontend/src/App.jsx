import React from "react";
import Slider from "./Components/Slider";
import Categories from "./Components/Categories";
import ShopByCategories from "./Components/ShopByCategories";
import Products from "./Components/Products";
import InfoSections from "./Components/InfoSections";
import Testimonials from "./Components/Testimonials";
import Banner from "./Components/Banner";
import FAQ from "./Components/FAQ";

const App = () => {
  return (
    <h1 className=" min-h-[65vh]">
      <Slider />
      {/* <Categories /> */}
      <ShopByCategories />
      <div className="bg-gray-100 my-8 pb-2">
        <Products />
      </div>
      <InfoSections />
      <Banner />
      <Testimonials />
      <FAQ />
    </h1>
  );
};

export default App;
