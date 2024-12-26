import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Scarves = () => {
  const [scarves, setScarves] = useState([]);
  const data = useContext(ProductContext);

  useEffect(() => {
    const fetchData = async () => {
      if (
        data.products &&
        data.products.scarves &&
        data.products.scarves.length > 0
      ) {
        const scarvesProducts = data.products.scarves.map((product) => ({
          ...product,
          firstImage: product.images[0], // Add firstImage property
        }));
        setScarves(scarvesProducts);
      }
    };

    fetchData(); // Call the async function inside the useEffect
  }, [data]);

  useEffect(() => {
    if (scarves.length > 0) {
      scarves.forEach((scarf) => {
        console.log(scarf.id); // Log the id of each scarf
      });
    }
  }, [scarves]);

  return (
    <div>
      {/* Product category scarves */}
      <div>
        <h1 className="text-3xl font-CreatoDisplay mt-5 font-semibold">
          Women Scarves
        </h1>
      </div>
      {/* All products */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5 gap-y-10">
        {/* Product */}
        {scarves.map((product, i) => {
          console.log(product.id); // Log the id to see if it's correct
          return (
            <NavLink to={`/product/${product.id}`} key={i}>
              <SingleProduct product={{ ...product }} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Scarves;
