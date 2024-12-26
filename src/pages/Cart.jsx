import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import BuyIcon from "../components/BuyIcon";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import CancelIcon from "../components/CancelIcon";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div>
      <NavBar />
      <section className="md:mt-16 mt-0 md:px-10 px-4 font-CreatoDisplay">
        {/* Heading */}
        <h1 className="uppercase md:text-6xl text-4xl text-center font-Antiqua">
          Shopping Cart
        </h1>
        {/* Order & cart items */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-[70%,30%] gap-x-5 justify-center">
          {/* Cart */}
          <div className="border-t border-primaryText">
            {/* Cart item */}
            <div className="p-3 overflow-hidden border-b border-primaryText">
              {/* Name and price */}
              <NavLink to={'/product'} className="flex justify-between font-semibold">
                <h2 className="md:text-2xl text-xl hover:opacity-75 duration-200">
                  Sporty Steatshirt
                </h2>
                <h2 className="md:text-2xl text-xl">$50</h2>
              </NavLink>
              {/* Details and photo */}
              <div className="flex items-end justify-between mt-7 overflow-hidden">
                {/* Details */}
                <div className="flex flex-col justify-center items-start gap-1">
                  <h2>Size : M</h2>
                  {/* Quantity */}
                  <div>
                    <h3 className="">Quantity</h3>
                    <div className="flex gap-1 items-center mt-2">
                      <div className="flex justify-between items-center border border-primaryText md:w-32 w-24 md:h-10 h-8 md:text-3xl text-2xl overflow-hidden">
                        <span className="cursor-pointer p-2">-</span>
                        <span className="text-xl">1</span>
                        <span className="cursor-pointer p-2">+</span>
                      </div>
                    </div>
                  </div>
                  {/* Cancel button */}
                  <Button borderBottomOnly={true} icon={<CancelIcon />} text={'Remove'}/>
                </div>
                {/* Photo */}
                <NavLink to={'/product'} className="md:w-[20%] w-[30%] md:h-[15vw] sm:h-[32vw] h-[30vw]">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1733748330558-0d56cdd25dce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </NavLink>
              </div>
            </div>
          </div>
          {/* Order summmary */}
          <div className="w-full h-fit px-3 py-5 overflow-hidden border border-primaryText md:mt-0 mt-8">
            <h1 className="text-3xl mb-4 font-semibold">Order Summary</h1>
            <div className="flex justify-between opacity-75 font-semibold">
              <h2>Subtotal</h2>
              <h2>$500</h2>
            </div>
            <div className="flex justify-between opacity-75 font-semibold">
              <h2>Shipping</h2>
              <h2>Free</h2>
            </div>
            {/* Border line */}
            <div className="border-b border-primaryText my-4 opacity-70"></div>
            <div className="flex justify-between opacity-75 font-semibold">
              <h2>Total</h2>
              <h2>$789</h2>
            </div>
            <div className="mt-10">
              <Button marginTop={"10px"} text={"Buy Now"} icon={<BuyIcon />} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
