import React, { useEffect, useState } from "react";
import FilterIcon from "./FilterIcon";
import SortIcon from "./SortIcon";

const DropDown = () => {
  const dropDownOptions = {
    filterOptions: ["All", "Men", "Women", "Shoes", "Kids"],
    sortOptions: ["Default", "Low to High", "High to Low"],
  };

  const [isFilterDropdownVisible, setIsFilterDropdownVisible] = useState(false);
  const [isSortDropdownVisible, setIsSortDropdownVisible] = useState(false);

  const toggleFilterDropdown = () => {
    setIsFilterDropdownVisible(!isFilterDropdownVisible);
    setIsSortDropdownVisible(false); // Close sort dropdown if open
  };

  const toggleSortDropdown = () => {
    setIsSortDropdownVisible(!isSortDropdownVisible);
    setIsFilterDropdownVisible(false); // Close filter dropdown if open
  };

  // Handle dropdown visibility on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest("#filter-dropdown") &&
        !event.target.closest("#sort-dropdown") &&
        !event.target.closest(".cursor-pointer")
      ) {
        setIsFilterDropdownVisible(false);
        setIsSortDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="flex justify-between items-center font-CreatoDisplay font-[500]">
      {/* Filter Dropdown */}
      <div
        id="filter-dropdown"
        className="md:text-xl text-base inline-flex items-center md:gap-2 gap-1 relative cursor-pointer"
        onClick={toggleFilterDropdown}
      >
        <h2>Filter</h2>
        <FilterIcon />
        {isFilterDropdownVisible && (
          <div className="absolute top-6 left-0 bg-primaryText text-primaryBG w-44 px-2 py-3 dropdown text-sm">
            <ul className="flex gap-3 flex-col">
              {dropDownOptions.filterOptions.map((option, index) => (
                <li
                  key={index}
                  className="border text-center cursor-pointer px-3 py-1 hover:border-primaryBG border-transparent relative z-50 w-full hover:opacity-75 duration-100"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sort Dropdown */}
      <div
        id="sort-dropdown"
        className="md:text-xl text-base inline-flex items-center md:gap-2 gap-1 relative cursor-pointer"
        onClick={toggleSortDropdown}
      >
        <h2>Sort</h2>
        <SortIcon />
        {isSortDropdownVisible && (
          <div className="absolute top-6 right-0 bg-primaryText text-primaryBG w-44 px-2 py-3 dropdown text-sm">
            <ul className="flex gap-3 flex-col">
              {dropDownOptions.sortOptions.map((option, index) => (
                <li
                  key={index}
                  className="border text-center cursor-pointer px-3 py-1 hover:border-primaryBG border-transparent relative z-50 w-full hover:opacity-75 duration-100"
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default DropDown;
