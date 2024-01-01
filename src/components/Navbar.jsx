"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [handlenav, sethandlenav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="max-w-xl overflow-hidden mt-4 fixed top-0 left-0 right-0 mx-auto z-50 backdrop-blur-md">
      <div
        className={`desktop-nav max-w-[20rem] md:max-w-xl  mx-auto rounded-full px-3 md:px-6 py-3 grid grid-cols-3 items-center text-base border border-white text-white `}
      >
        <div className="menu desktop hidden md:block">
          <ul className="flex items-center gap-4">
            <Link href="#about">About</Link>
            <Link href="#portfolio">Work</Link>
            <Link href="#review">Reviews</Link>
            <Link href="#services">Service</Link>
          </ul>
        </div>
        <div className="menu mobile block md:hidden ">
          <div>
            <div
              className={`close cursor-pointer ${
                handlenav ? "hidden" : "block"
              }`}
            >
              <IoClose size={25} onClick={() => sethandlenav(!handlenav)} />
            </div>
            <div
              className={`open cursor-pointer ${
                handlenav ? "block" : "hidden"
              }`}
            >
              <IoMdMenu size={25} onClick={() => sethandlenav(!handlenav)} />
            </div>
          </div>
        </div>
        <div className="logo text-center">
          
        </div>
        <div className="button text-right">
          <button className="rounded-full text-xs md:px-4 px-3 py-1 border">
            <Link href="#contact">Hit me Up</Link>
          </button>
        </div>
      </div>
      <div
        className={`mobile-nav  z-50 h-screen backdrop-blur ${
          handlenav ? "hidden" : "block"
        }`}
      >
        <div className="h-full pb-20  text-gray-200">
          <ul className="px-5 py-6">
            <li
              className="border-b my-4 border-gray-300 pb-2 uppercase"
              onClick={() => sethandlenav(!handlenav)}
            >
              <Link href="#about">About</Link>
            </li>
            <li
              className="border-b my-4 border-gray-300 pb-2 pt-2 uppercase"
              onClick={() => sethandlenav(!handlenav)}
            >
              <Link href="#portfolio">Work</Link>
            </li>
            <li
              className="border-b my-4 border-gray-300 pb-2 pt-2 uppercase"
              onClick={() => sethandlenav(!handlenav)}
            >
              <Link href="#review">Reviews</Link>
            </li>
            <li
              className="border-b my-4 border-gray-300 pb-2 pt-2 uppercase"
              onClick={() => sethandlenav(!handlenav)}
            >
              <Link href="#services">Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
