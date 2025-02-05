import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const KidsProducts = () => {
  const [kids, setKids] = useState([]);
  const data = useContext(ProductContext);
  const componentName = 'kids';

  useEffect(() => {
    if (data.products && data.products.kids && data.products.kids.length > 0) {
      const kidsProducts = data.products.kids.map((product) => ({
        ...product,
        firstImage: product.images[0], // Add firstImage property
      }));
      setKids(kidsProducts);
    }
  }, [data]);
  return (
    <div>
      {/* Product category kids */}
      <div>
        <h1 className="text-3xl font-CreatoDisplay mt-5 font-semibold">
          Kids
        </h1>
      </div>
      {/* ALl products */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5 gap-y-10">
        {/* Prodcuct */}
        {kids.map((product, i) => (
         <NavLink to={`/product/${componentName}/${product.id}`} key={i}>
            <SingleProduct product={{ ...product }} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default KidsProducts;
