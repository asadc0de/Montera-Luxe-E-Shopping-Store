import React from "react";
import { Link } from "react-router-dom";

const NavBarOptions = () => {
  return (
    <>
      <Link className="list-none cursor-pointer hover:opacity-75 duration-200">Men</Link>
      <Link className="list-none cursor-pointer hover:opacity-75 duration-200">Women</Link>
      <Link className="list-none cursor-pointer hover:opacity-75 duration-200">Women Scarves</Link>
      <Link className="list-none cursor-pointer hover:opacity-75 duration-200">Kids</Link>
    </>
  );
};

export default NavBarOptions;
