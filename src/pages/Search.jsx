import React, { useContext } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import { ProductContext } from "../context/Context";

const Search = () => {
  const data = useContext(ProductContext);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // Get 'query' parameter from URL

  // Combine all products from different categories into a single array
  const allProducts = Object.values(data.products || {}).flat();

  // Filter products based on word matches in the query and product name
  const filteredProducts = allProducts
    .filter((product) => {
      const productWords = product.name.toLowerCase().split(" "); // Split product name into words
      const queryWords = query.toLowerCase().split(" "); // Split query into words

      // Check if any word from the query matches any word from the product name
      return queryWords.some((word) => productWords.includes(word));
    })
    .map((product) => ({
      ...product,
      firstImage: product.images[0], // Add firstImage property
    }));

  return (
    <div>
      <NavBar />
      <div className="md:mt-20 mt-0 md:px-10 px-4">
        {/* Heading */}
        <div>
          <h1 className="md:text-6xl text-[2.8rem]">
            Search Results for:
            <span className="font-CreatoDisplay text-3xl ml-4 font-semibold border-b border-b-black">
              {query && query.trim() !== ""
                ? query.split(" ").map((word, index) => (
                    <span key={index} className="text-black mx-1">
                      {word}
                    </span>
                  ))
                : "All Products"}
            </span>
          </h1>
        </div>

        {/* Search results */}
        {filteredProducts.length > 0 ? (
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5 gap-y-10">
            {filteredProducts.map((product, i) => (
              <NavLink to={`/product/${product.id}`} key={i}>
              <SingleProduct key={i} product={{ ...product }} />
            </NavLink>            
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center text-5xl font-CreatoDisplay font-bold w-full h-[20vw]">
            <h1 className="border-b border-b-black">No product found!</h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
