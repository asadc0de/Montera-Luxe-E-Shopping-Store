import React from "react";
import Button from "./Button";
import ar1 from '../assets/arrival (1).png';
import ar2 from '../assets/arrival (2).png';
import ar3 from '../assets/arrival (3).png';
import { NavLink } from "react-router-dom";

const NewArrival = () => {
  return (
    <section className="md:mt-40 mt-16 px-5" id="newArrival">
      <h1 className="md:text-6xl text-[2.8rem]">NEW ARRIVALS</h1>
      {/* Images section */}
      <div className="flex justify-start md:mt-24 mt-12 gap-5">
        {/* Image1 */}
        <div className="flex flex-col justify-between">
          {/* Image and name/price */}
          <NavLink to={"/product"}>
            <div className="overflow-hidden w-fit">
              <img
                className="md:w-[26vw] w-[40vw] md:h-[33vw] h-[40] object-cover duration-300 hover:scale-[1.06]"
                src={ar1}
                alt="arrival-product1"
              />
            </div>
            {/* Name and price */}
            <div className="mt-3 flex justify-between font-CreatoDisplay font-semibold md:text-lg text-sm">
              <h3>Long panama</h3>
              <h3>$ 75</h3>
            </div>
          </NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} to={"/allproducts"}>
            <Button text={"See all"} />
          </NavLink>
        </div>
        {/* Image2 */}
        <NavLink to={"/product"}>
        <div className="overflow-hidden w-fit">
          <img
            className="md:w-[21vw] w-[45vw] md:h-[23vw] h-[78vw] object-cover duration-300 hover:scale-[1.06]"
            src={ar2}
            alt="arrival-product2"
          />
          </div>
          {/* Name and price */}
          <div className="mt-3 flex justify-between font-CreatoDisplay font-semibold md:text-lg text-sm">
            <h3>Long panama</h3>
            <h3>$ 75</h3>
          </div>
        </NavLink>
        {/* Image3 */}
        <div className="ml-auto md:block hidden">
          <img
            className="w-[32vw] h-[44vw] object-cover"
            src="https://images.unsplash.com/photo-1586078130702-d208859b6223?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2lvbiUyMG1vZGVsfGVufDB8fDB8fHww"
            alt="arrival-product3"
          />
        </div>
      </div>
      {/* Text section */}
      <div className="mt-20 font-CreatoDisplay text-3xl font-semibold">
        <p className="md:w-[44%] w-full md:text-end text-start ml-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          numquam incidunt rem. Quam, quaerat alias.
        </p>
      </div>
    </section>
  );
};

export default NewArrival;
