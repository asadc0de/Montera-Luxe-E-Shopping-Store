import React, { useState } from "react";

const NewsLetter = () => {
  const [isFocused, setIsFocused] = useState(false); // Track if input is focused
  const [hasValue, setHasValue] = useState(false); // Track if input has any value

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setHasValue(inputValue.trim() !== ""); // Check if input has any value
  };

  const handleFocus = () => {
    setIsFocused(true); // Set focus state to true
  };

  const handleBlur = () => {
    setIsFocused(false); // Set focus state to false
  };

  return (
    <div className="md:mt-40 mt-16 flex flex-col gap-16">
      <h1 className="md:text-6xl text-2xl text-center font-CreatoDisplay capitalize font-semibold md:font-normal">
        subscribe to our newsletter
      </h1>
      <form
        action=""
        className="mx-auto md:w-[50%] w-full grid place-items-center font-CreatoDisplay relative"
      >
        <div className="relative md:w-[70%] w-[80%]">
          <div className="relative w-full">
            <div className="relative w-full inputWrapper">
              <input
                type="email"
                id="email"
                onChange={handleInputChange} // Handle input change
                onFocus={handleFocus} // Handle focus
                onBlur={handleBlur} // Handle blur
                className="peer border-b-primaryText py-[3px] text-lg border-b border-opacity-20 w-full bg-transparent text-primaryText outline-none placeholder-transparent"
                required
              />
              <label
                htmlFor="email"
                className={`absolute left-0 top-1 text-xl pointer-events-none opacity-50 transition-all duration-[.5s] transform origin-top-left ${
                  isFocused || hasValue
                    ? "-translate-y-[21px] scale-[.7] opacity-100"
                    : "translate-y-0 scale-100 opacity-50"
                }`}
              >
                Email
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          id="submitButton"
          disabled={!isFocused} // Disable button if input is invalid
          className={`absolute md:right-[15%] right-[10%] top-1 pl-4 transition-opacity duration-300 ${
            isFocused
              ? "opacity-100 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          →
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
