import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="md:mt-40 mt-16 pb-44 bg-primaryText text-primaryBG relative overflow-hidden after:text-[7rem] md:after:text-[8.7rem] pt-12 flex md:justify-end justify-center sm:px-0 px-3"
    >
      <footer className="flex md:gap-60 gap-32 md:ml-auto w-fit justify-center items-center mt-5 md:mr-24">
        <section className="flex flex-col gap-6 font-clamp font-CreatoDisplay">
          <li className="list-none font-bold sm:text-3xl md:text-xl text-lg">
            SHOP NOW
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            Clothing
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            Shoes
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            New In
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            Sale
          </li>
        </section>
        <section className="flex flex-col gap-6 font-clamp font-CreatoDisplay">
          <li className="list-none font-bold sm:text-3xl md:text-xl text-lg">
            FOLLOW US
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            Github
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            LinkedIn
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            Instagram
          </li>
          <li className="list-none cursor-pointer w-fit relative after:absolute after:-bottom-[2px]  after:w-0 after:border-b hover:after:w-full after:duration-300 after:origin-center after:left-1/2 hover:after:left-0">
            Facebook
          </li>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
