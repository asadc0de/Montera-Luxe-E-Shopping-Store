import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const MenProducts = () => {
  const [men, setMen] = useState([]);
  const data = useContext(ProductContext);
  const componentName = 'men';

  useEffect(() => {
    if (data.products && data.products.men && data.products.men.length > 0) {
      const menProducts = data.products.men.map((product) => ({
        ...product,
        firstImage: product.images[0], // Add firstImage property
      }));
      setMen(menProducts);
    }
  }, [data]);
  return (
    <div>
      {/* Product category men */}
      <div>
        <h1 className="text-3xl font-CreatoDisplay mt-5 font-semibold">
          Men
        </h1>
      </div>
      {/* ALl products */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5 gap-y-10">
        {/* Prodcuct */}
        {men.map((product, i) => (
         <NavLink to={`/product/${componentName}/${product.id}`} key={i}>
            <SingleProduct product={{ ...product }} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MenProducts;
