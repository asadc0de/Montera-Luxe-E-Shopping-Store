import "./index.css";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
