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
    <div className="relative">
      <div
        className={`desktop-nav max-w-5xl rounded-full px-6 py-3 mx-auto mt-4 grid grid-cols-3 items-center auto-cols-fr text-base`}
        style={{
          backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "rgb(105,25,255)",
          color: "white",
          transition: "background-color 0.7s ease",
        }}
      >
        <div className="menu desktop hidden md:block">
          <ul className="flex items-center gap-4">
            <Link href={"#about"}>About</Link>
            <Link href={"#portfolio"}>Work</Link>
            <Link href={"#review"}>Reviews</Link>
            <Link href={"#services"}>Service</Link>
          </ul>
        </div>
        <div className="menu mobile block md:hidden">
          <div>
            <div
              className={`close cursor-pointer ${
                handlenav ? "hidden" : "block"
              }`}
            >
              <IoClose size={30} onClick={() => sethandlenav(!handlenav)} />
            </div>
            <div
              className={`open cursor-pointer ${
                handlenav ? "block" : "hidden"
              }`}
            >
              <IoMdMenu size={30} onClick={() => sethandlenav(!handlenav)} />
            </div>
          </div>
        </div>
        <div className="logo  text-center">
          <span className="font-bold">Umair</span> Dev
        </div>
        <div className="button  text-right">
          <button className="rounded-full px-4 py-1 border"><Link href={"#contact"}>Hit me Up</Link></button>
        </div>
      </div>
      <div
        className={`mobile-nav h-screen w-full backdrop-blur bg-[#37118b] -z-10 ${
          handlenav ? "hidden" : "block"
        }`}
      >
        <div className=" h-full py-20  text-gray-200">
          <ul className="px-5 py-6">
            <li className="border-b border-gray-300 pb-2 uppercase" onClick={() => sethandlenav(!handlenav)}>
              <Link href={"#about"}>About</Link>
            </li>
            <li className="border-b border-gray-300 pb-2 pt-2 uppercase" onClick={() => sethandlenav(!handlenav)}>
              <Link href={"#portfolio"}>Work</Link>
            </li>
            <li className="border-b border-gray-300 pb-2 pt-2 uppercase" onClick={() => sethandlenav(!handlenav)}>
              <Link href={"#review"}>Reviews</Link>
            </li>
            <li className="border-b border-gray-300 pb-2 pt-2 uppercase" onClick={() => sethandlenav(!handlenav)}>
              <Link href={"#services"}>Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
