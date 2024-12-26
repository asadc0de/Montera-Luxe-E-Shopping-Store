import React from "react";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const BestSellers = () => {
  return (
    <div className="md:mt-40 mt-16 px-5">
      <h1 className="md:text-6xl text-[2.8rem]">BESTSELLERS</h1>
      {/* Images section1 */}
      <div className="flex justify-center md:mt-24 mt-12">
        {/* Imag1 */}
        <NavLink to={"/allproducts"} className="flex-1">
          <div className="overflow-hidden w-fit">
            <img
              className="md:w-[15vw] w-[80%] md:h-[16vw] h-[58vw] object-cover duration-300 hover:scale-[1.06]"
              src="https://images.unsplash.com/photo-1516575150278-77136aed6920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGdpcmwlMjBtb2RlbCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
              alt="best-sellers-product1"
            />
          </div>
          {/* Name and price */}
          <div className="mt-3 flex md:w-[15vw] w-[80%] justify-between font-CreatoDisplay md:text-lg text-sm">
            <h3 className="cursor-pointer">Swimwear</h3>
            <h3 className="font-semibold">
              <NavLink to={"/allproducts"}>
                <span className="underline mr-2 hover:opacity-75 duration-200 cursor-pointer">
                  More
                </span>
                <span>→</span>
              </NavLink>
            </h3>
          </div>
        </NavLink>
        {/* Imag2 */}
        <NavLink to={"/allproducts"}>
          <div className="overflow-hidden w-fit">
            <img
              className="w-[40vw] h-[38vw] object-cover object-top duration-300 hover:scale-[1.06]"
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="best-sellers-product2"
            />
          </div>
          {/* Name and price */}
          <div className="mt-3 flex w-[40vw] justify-between font-CreatoDisplay md:text-lg text-sm">
            <h3 className="cursor-pointer">Outwear</h3>
            <h3 className="font-semibold">
              <NavLink to={"/allproducts"}>
                <span className="underline mr-2 hover:opacity-75 duration-200 cursor-pointer">
                  More
                </span>
                <span>→</span>
              </NavLink>
            </h3>
          </div>
        </NavLink>
        {/* Imag3 */}
        <NavLink
          to={"/allproducts"}
          className="flex-1 self-end hidden md:block"
        >
          <div className="overflow-hidden w-fit ml-auto">
            <img
              className="w-[20vw] h-[24vw] object-cover mt-[15rem] duration-300 hover:scale-[1.06]"
              src="https://images.unsplash.com/photo-1532328076801-a862c9d5a74a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdpcmwlMjBtb2RlbCUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D"
              alt="best-sellers-product3"
            />
          </div>
          {/* Name and price */}
          <div className="mt-3 flex w-[20vw] justify-between font-CreatoDisplay text-lg ml-auto">
            <h3 className="cursor-pointer">Homewear</h3>
            <h3 className="font-semibold">
              <NavLink to={"/allproducts"}>
                <span className="underline mr-2 hover:opacity-75 duration-200 cursor-pointer">
                  More
                </span>
                <span>→</span>
              </NavLink>
            </h3>
          </div>
        </NavLink>
      </div>
      {/* Text */}
      <div>
        <p className="capitalize md:text-6xl text-4xl text-center md:my-16 my-6">
          Better than you can imagine
        </p>
      </div>
      {/* Images section2 */}
      <div className="flex md:justify-normal justify-between w-full">
        {/* Imag1 */}
        <div className="md:w-[35%] w-[49%]">
        <NavLink to={"/allproducts"}>
        <div className="overflow-hidden w-fit md:ml-auto">
          <img
            className="md:w-[30vw] w-full md:h-[30vw] h-[55vw] object-cover duration-300 hover:scale-[1.06]"
            src="https://images.unsplash.com/photo-1580651214613-f4692d6d138f?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="best-sellers-product4"
          />
          </div>
          {/* Name and price */}
          <div className="mt-3 flex md:w-[30vw] w-full justify-between font-CreatoDisplay md:text-lg text-sm ml-auto">
            <h3 className="cursor-pointer">Swimwear</h3>
            <h3 className="font-semibold">
                <span className="underline mr-2 hover:opacity-75 duration-200 cursor-pointer">
                  More
                </span>
                <span>→</span>
            </h3>
          </div>
              </NavLink>
          <div className="md:w-[30vw] w-full ml-auto">
            <NavLink to={"/allproducts"}>
              <Button text={"See all"} />
            </NavLink>
          </div>
        </div>
        {/* Imag2 */}
        <div className="md:w-[65%] w-[49%]">
          <img
            className="md:w-[40vw] w-[45vw] md:h-[45vw] h-full object-cover ml-auto md:mr-32 mr-0 md:mt-12 mt-0"
            src="https://plus.unsplash.com/premium_photo-1708275298681-f524eab4c5ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="best-sellers-featured-image"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
