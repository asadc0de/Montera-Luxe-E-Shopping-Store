import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const FeaturedImage = () => {
  return (
    <div
      id="featuredImage"
      className="md:mt-40 mt-16 w-full md:h-[93vh] h-screen border bg-[url(/src/assets/feature3d.png)] bg-center bg-cover bg-no-repeat text-primaryBG flex flex-col justify-end relative overflow-hidden after:text-[8.7rem] selection:text-primaryText selection:bg-primaryBG" 
    >
      <div className="md:w-1/2 w-full px-4 md:px-0 ml-auto flex flex-col md:gap-7 gap-3">
        <h1 className="md:text-7xl text-5xl">Montera Luxe</h1>
        <p className="font-CreatoDisplay md:text-2xl text-xl md:w-[60%] w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          exercitationem, quos molestias animi architecto maiores?
        </p>
        <div className="md:w-[20vw] w-[70%] mb-16">
          <NavLink to={'/allproducts'}>
          <Button border={'#F9F8F7'} text={"Shop Now"} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
