import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const WomenProducts = () => {
  const [women, setWomen] = useState([]);
  const data = useContext(ProductContext);

  useEffect(() => {
    if (
      data.products &&
      data.products.women &&
      data.products.women.length > 0
    ) {
      const womenProducts = data.products.women.map((product) => ({
        ...product,
        firstImage: product.images[0], // Add firstImage property
      }));
      setWomen(womenProducts);
    }
  }, [data]);
  return (
    <div>
      {/* Product category women */}
      <div>
        <h1 className="text-3xl font-CreatoDisplay mt-5 font-semibold">
          Women
        </h1>
      </div>
      {/* ALl products */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5 gap-y-10">
        {/* Prodcuct */}
        {women.map((product, i) => (
          <NavLink to="/product" key={i}>
            <SingleProduct product={{ ...product }} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default WomenProducts;
