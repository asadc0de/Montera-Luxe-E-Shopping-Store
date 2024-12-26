import React from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import NewArrival from "../components/NewArrival";
import BestSellers from "../components/BestSellers";
import FeaturedImage from "../components/FeaturedImage";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import NavBarOptions from "../components/NavBarOptions";

const Home = () => {
  return (
    <>
      {/* Nav bar */}
      <NavBar navOptions={<NavBarOptions />} />
      {/* Header */}
      <Header />
      {/* New arrivals */}
      <NewArrival />
      {/* Best sellers */}
      <BestSellers />
      {/* Featured image */}
      <FeaturedImage />
      {/* Newsletter */}
      <NewsLetter />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
