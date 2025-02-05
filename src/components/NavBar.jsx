import React, { useEffect, useRef, useState } from "react";
import CartIcon from "./CartIcon";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ navOptions }) => {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  const handleIconClick = () => {
    setShowInput(true);
    setTimeout(() => inputRef.current?.focus(), 0); // Focus on the input
  };

  const handleClickOutside = (event) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(event.target) &&
      event.target.id !== "searchIcon" // Exclude clicks on the icon
    ) {
      if (inputRef.current.value.trim() === "") {
        setShowInput(false); // Hide input if empty
      }
    }
  };

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  useEffect(() => {
    if (showInput) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showInput]);
  return (
    <nav className="flex gap-5 flex-col justify-center items-center mt-5">
      <div className="md:w-1/2 w-full ml-auto md:pr-5 flex justify-between md:px-0 px-3">
        {/* Logo */}
        <NavLink to={"/"} className="md:text-5xl text-4xl font-Antiqua">
          ML
        </NavLink>
        {/* Nav right options */}
        <div className="font-CreatoDisplay flex gap-4 items-center justify-end w-full">
          {/* Search */}
          <div className="list-none cursor-pointer md:w-[43%] w-[57%] flex justify-between items-center relative">
            <input
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             onKeyDown={handleSearch}
              type="text"
              ref={inputRef}
              spellCheck="false"
              className={`input-class ${
                showInput ? "expand" : "shrink"
              } text-base md:text-[1.3rem]`}
            />
            <svg
              onClick={handleIconClick}
              id="searchIcon"
              className="absolute right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="rgba(0,0,0,1)"
            >
              <path d="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"></path>
            </svg>
          </div>
          <NavLink to={"/cart"} className="list-none cursor-pointer">
            <CartIcon />
          </NavLink>
          <li className="list-none cursor-pointer font-semibold">Sign In</li>
        </div>
      </div>
      <section className="px-2 font-semibold md:mt-0 mt-16 text-xl md:text-base justify-center items-center flex-wrap flex md:gap-16 gap-7 font-clamp font-CreatoDisplay text-center">
        {navOptions}
      </section>
    </nav>
  );
};

export default NavBar;
