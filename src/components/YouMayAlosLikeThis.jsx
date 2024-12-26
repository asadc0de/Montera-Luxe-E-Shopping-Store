import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/Context";

const YouMayAlosLikeThis = () => {
  const [scarves, setScarves] = useState([]);
    const data = useContext(ProductContext);
  
    useEffect(() => {
      if (data.products && data.products.scarves && data.products.scarves.length > 0) {
        const scarvesProducts = data.products.scarves.map((product) => ({
          ...product,
          firstImage: product.images[0], // Add firstImage property
        }));
        setScarves(scarvesProducts);
      }
    }, [data]);
  return (
    <div className="md:mt-28 mt-16 px-5">
      <div>
        {/* Category text */}
        <h1 className="md:text-6xl text-[2.8rem] text-center">
          You May Also Like
        </h1>
        {/* Sugested products */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 gap-y-10 md:mt-24 mt-12">
          {/* Prodcuct */}
          {scarves.map((product, i) => (
          <NavLink to="/product" key={i}>
            <SingleProduct product={{ ...product }} />
          </NavLink>
        ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlosLikeThis;
