import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import RatingStar from "../components/RatingStar";
import Button from "../components/Button";
import BuyIcon from "../components/BuyIcon";
import CartIcon from "../components/CartIcon";
import YouMayAlosLikeThis from "../components/YouMayAlosLikeThis";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const Product = () => {
  const {id} = useParams()
  console.log(id)
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div>
      <NavBar />
      <div className="md:mt-20 mt-16 md:px-10 px-4 justify-center grid grid-cols-1 md:grid-cols-[10%,50%,40%] gap-x-4 w-full h-auto">
        <div className="flex order-2 md:flex-col md:order-1 flex-row gap-3 md:mt-0 mt-3">
          <div className="w-full md:h-[8vw] h-[18vw] cursor-pointer border border-primaryText p-1">
            <img
              className="w-full h-full object-cover"
              src="https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V60215.1.jpg?v=1731060314&width=600"
              alt="prodcut-img-preview1"
            />
          </div>
          <div className="w-full md:h-[8vw] h-[18vw] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V60215.1.jpg?v=1731060314&width=600"
              alt="prodcut-img-preview2"
            />
          </div>
          <div className="w-full md:h-[8vw] h-[18vw] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V60215.1.jpg?v=1731060314&width=600"
              alt="prodcut-img-preview3"
            />
          </div>
          <div className="w-full md:h-[8vw] h-[18vw] cursor-pointer">
            <img
              className="w-full h-full object-cover"
              src="https://pk.sapphireonline.pk/cdn/shop/files/WTOP24V60215.1.jpg?v=1731060314&width=600"
              alt="prodcut-img-preview4"
            />
          </div>
        </div>
        <div className="w-full order-1 md:h-[45vw] h-[100vw] sm:h-[90vw] md:order-2 cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1657130711052-65e713e3a0a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product-image"
          />
        </div>
        <div className="font-CreatoDisplay md:mt-0 mt-5 order-3 h-auto flex md:gap-6 gap-3 flex-col text-primaryText">
          {/* Heading */}
          <h1 className="lg:text-5xl text-[1.8rem] font-[500]">
            FLoral ruffel hem tea dress
          </h1>
          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </div>
            <h3 className="opacity-90">Rating 5</h3>
          </div>
          {/* Price */}
          <h2 className="lg:text-3xl text-2xl font-bold">$100</h2>
          {/* Size */}
          <div>
            <h3 className="">Size: M</h3>
            {/* Sizing */}
            <div className="flex gap-1 items-center mt-2">
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">
                S
              </div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">
                M
              </div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">
                L
              </div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">
                XL
              </div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm ">
                XXL
              </div>
            </div>
          </div>
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
          {/* Add to cart */}
          <div>
            <Button
              marginTop={"10px"}
              text={"Add to Cart"}
              icon={<CartIcon />}
            />
            <Button text="Buy Now" icon={<BuyIcon />} borderBottomOnly={true} />
          </div>
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold">Material & Care</h3>
            <ul className="opacity-80 mt-4 lg:text-base text-sm">
              <li>
                <span>▸</span> Premium wool-blend fabric (70% Wool, 30%
                Polyester).
              </li>
              <li>
                <span>▸</span> Hand wash or gentle machine cycle in cold water.
              </li>
              <li>
                <span>▸</span> Lay flat to dry; avoid direct sunlight.
              </li>
              <li>
                <span>▸</span> Steam or use low heat if necessary.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <YouMayAlosLikeThis />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
