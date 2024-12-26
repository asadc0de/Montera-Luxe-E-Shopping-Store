import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="md:mt-24 mt-15 w-full flex justify-center overflow-hidden relative">
      {/* Big text */}
      <div className=" absolute top-0 -z-10 md:pt-6 mt-10 select-none">
        <h1 className="text-[13vw] font-Antiqua md:scale-y-[2.5] scale-y-[3.5]">
          MONTERA LUXE
        </h1>
      </div>
      {/* 1st pic */}
      <div className="flex justify-around w-full mt-36 mb-3">
        <section>
          <div className="w-[35vw] h-[40vw] md:block hidden">
            <img
            
              className="w-full h-full object-cover"
              src="../src/assets/img1.jpg"
              alt="hero-image1"
            />
          </div>
        </section>
        {/* 2nd pic */}
        <NavLink
          to={"/allproducts"}
          className="relative flex flex-col gap-3 items-center justify-end md:mt-0 mt-[-20%]"
        >
          <div className="md:w-[20vw] w-[80%] h-[88vw] md:h-[22vw] overflow-hidden">
            <img
              className="w-full h-full object-cover duration-300 hover:scale-[1.06]"
              src="../src/assets/img2.webp"
              alt="hero-image2"
            />
          </div>
          <p className="md:w-[20vw] w-[80%] md:text-lg text-xl font-CreatoDisplay">
            <span className="font-semibold">Induldge</span> in exquisite fabrics
            and timeless designs.
          </p>
          <div className="w-[80%] md:w-[20vw]">
            <Button text={"Shop Now"} />
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
