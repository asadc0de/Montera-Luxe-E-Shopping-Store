import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import DropDown from "../components/DropDown";
import Footer from "../components/Footer";
import CancelIcon from "../components/CancelIcon";
import WomenProducts from "../components/WomenProducts";
import MenProducts from "../components/MenProducts";
import KidsProducts from "../components/KidsProducts";
import Scarves from "../components/Scarves";

const AllProducts = () => {

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="md:mt-20 mt-0 md:px-10 px-4">
        {/* Heading */}
        <div>
          {/* Category text */}
          <h1 className="md:text-6xl text-[2.8rem]">All Products</h1>
        </div>
        {/* Filter and sort */}
        <section className="mt-12">
          {/* Filter */}
          <DropDown />
          {/* Selected dropdown items */}
          <div>
            <ul className="flex md:text-base text-sm gap-10 md:mt-5 mt-2 font-CreatoDisplay opacity-85 relative -z-50">
              <li className="inline-flex justify-center items-center gap-1 cursor-pointer">
                Men <CancelIcon />
              </li>
              <li className="inline-flex justify-center items-center gap-1 cursor-pointer">
                High to low <CancelIcon />
              </li>
            </ul>
          </div>
          <WomenProducts />
          <MenProducts />
          <Scarves />
          <KidsProducts />
          {/* <LoadMore /> */}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
