import React, { useState } from "react";
import { createContext } from "react";
import products from './allProdcuts'

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [data, setData] = useState(products);
  return (
    <div>
      <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
    </div>
  );
};

export default Context;