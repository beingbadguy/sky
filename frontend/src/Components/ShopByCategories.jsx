import React from "react";

const ShopByCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Jewellery",
      image:
        "https://d1put4x3vjlh9s.cloudfront.net/public/uploads/catalog/product/large/F4D6ZG/GNTH22-FXY20-2.webp",
      bgColor: "bg-rose-100",
    },
    {
      id: 2,
      name: "Electronics",
      image:
        "https://veena-theme.myshopify.com/cdn/shop/collections/Audio_video.webp?v=1705990462",
      bgColor: "bg-cyan-100",
    },
    {
      id: 3,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-purple-100",
    },
    {
      id: 4,
      name: "Home and Kitchen",
      image:
        "https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-orange-100",
    },
    {
      id: 5,
      name: "Health and Beauty",
      image:
        "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?q=80&w=2613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-green-100",
    },
    {
      id: 6,
      name: "Sports and Fitness",
      image:
        "https://images.unsplash.com/photo-1455853828816-0c301a011711?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-blue-100",
    },
    {
      id: 7,
      name: "Books and Media",
      image:
        "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-yellow-100",
    },
    {
      id: 8,
      name: "Toys and Games",
      image:
        "https://plus.unsplash.com/premium_photo-1684623605109-263925d88106?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-pink-100",
    },
    {
      id: 9,
      name: "Baby and Kids",
      image:
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bgColor: "bg-indigo-100",
    },
  ];

  return (
    <div className="m-4">
      <h1 className="p-2 md:p-4 bg-gray-200 my-6 flex items-center justify-between rounded">
        <p className="text-lg sm:text-xl  md:text-2xl ">Shop By Categories</p>
        {/* <p className="underline cursor-pointer">See all categories</p> */}
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative w-full h-48 rounded-lg overflow-hidden ${category.bgColor} transition-all duration-500 ease-in-out cursor-pointer hover:scale-95 `}
          >
            <img
              src={category.image}
              alt={category.name}
              className="object-cover w-full h-full "
            />
            <div className="absolute bottom-0 left-0 w-full h-10 sm:h-10 bg-gradient-to-r from-blue-300 to-white text-center flex items-center justify-center text-sm font-bold text-black">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
