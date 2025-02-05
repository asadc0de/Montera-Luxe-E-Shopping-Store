import React, { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import RatingStar from "../components/RatingStar";
import Button from "../components/Button";
import BuyIcon from "../components/BuyIcon";
import CartIcon from "../components/CartIcon";
import YouMayAlosLikeThis from "../components/YouMayAlosLikeThis";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/Context";

const Product = () => {
  const data = useContext(ProductContext);
  const { componentName, id } = useParams(); // Extract both componentName and id from the URL
  const [cur, setCur] = useState(null);

  useEffect(() => {
    if (data.products && id) {
      let allProducts = [];
      if (componentName) {
        allProducts = data.products[componentName] || [];
      } else {
        allProducts = [
          ...(data.products.women || []),
          ...(data.products.men || []),
          ...(data.products.scarves || []),
          ...(data.products.kids || [])
        ];
      }
  
      const product = allProducts.find((product) => product.id.toString() === id);
      if (product) {
        setCur(product);
      } else {
        console.error(`Product with ID ${id} not found.`);
      }
    }
    console.log(cur);  // Check the full `cur` object
  }, [id, componentName, data]);
  

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Render product details
  if (!cur) {
    return <p className="w-full h-full text-4xl">Loading product details...</p>;
  }

  return (
    <div>
      <NavBar />
      <div className="md:mt-20 mt-16 md:px-10 px-4 justify-center grid grid-cols-1 md:grid-cols-[10%,50%,40%] gap-x-4 w-full h-auto">
        {/* Side images */}
        <div className="flex order-2 md:flex-col md:order-1 flex-row gap-3 md:mt-0 mt-3">
          {cur.images.map((image, i) => (
            <div className="w-full md:h-[8vw] h-[18vw] cursor-pointer border border-primaryText p-1" key={i}>
              <img className="w-full h-full object-cover" src={image} alt={image} />
            </div>
          ))}
        </div>

        {/* Main image */}
        <div className="w-full order-1 md:h-[45vw] h-[100vw] sm:h-[90vw] md:order-2 cursor-pointer">
          <img className="w-full h-full object-cover border border-primaryText" src={cur.images[0]} alt="product-image" />
        </div>

        {/* Product details */}
        <div className="font-CreatoDisplay md:mt-0 mt-5 order-3 h-auto flex md:gap-6 gap-3 flex-col text-primaryText">
          <h1 className="lg:text-5xl text-[1.8rem] font-[500]">{cur.name}</h1>
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
          <h2 className="lg:text-3xl text-2xl font-bold">{cur.price}</h2>
          <div>
            <h3 className="">Size: M</h3>
            <div className="flex gap-1 items-center mt-2">
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">S</div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">M</div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">L</div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">XL</div>
              <div className="flex justify-center items-center border border-primaryText lg:w-10 w-7 lg:h-10 h-7 cursor-pointer lg:text-base text-sm">XXL</div>
            </div>
          </div>
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
          <div>
            <Button marginTop={"10px"} text={"Add to Cart"} icon={<CartIcon />} />
            <Button text="Buy Now" icon={<BuyIcon />} borderBottomOnly={true} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Material & Care</h3>
            <ul className="opacity-80 mt-4 lg:text-base text-sm">
              {cur.careInstructions.map((careInstruction, index) => (
                <li key={index}>{careInstruction}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <YouMayAlosLikeThis />
      <Footer />
    </div>
  );
};

export default Product;
