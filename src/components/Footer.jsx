"use client";
import Link from "next/link";
import { SiUpwork } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=" py-8 pt-20 text-white bg-[#060918] pb-10 z-10 px-4 md:px-0 md:w-full">
      <div className="container w-screen mx-auto flex flex-col items-center justify-between">
        {/* First Section - Your Name */}
        <div className="mb-4  border-b-[1px] border-gray-700 w-full text-center pb-4">
          <p className="text-4xl mb-4 font-bold">Umair Dev 👨‍💻</p>
        </div>

        {/* Second Section - Navigation Links */}
        <div className="flex flex-wrap border-b-[1px] border-gray-700 justify-center text-center pb-4 items-center md:gap-5 gap-4 w-full text-sm mb-4 px-4">
          <Link
            href="#home"
            className="text-gray-500 font-bold hover:text-white mr-4 mb-2"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-500 font-bold hover:text-white mr-4 mb-2"
          >
            ABOUT
          </Link>
          <Link
            href="#portfolio"
            className="text-gray-500 font-bold hover:text-white mb-2"
          >
            WORK
          </Link>
          <Link
            href="#review"
            className="text-gray-500 font-bold hover:text-white mb-2"
          >
            FEEDBACK
          </Link>
          <Link
            href="#services"
            className="text-gray-500 font-bold hover:text-white mb-2"
          >
            SERVICES
          </Link>
          <Link
            href="#contact"
            className="text-gray-500 font-bold hover:text-white mb-2"
          >
            CONTACT
          </Link>
        </div>

        {/* Third Section - Social Media Links */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 mt-4 md:mt-0 justify-between w-full text-gray-500 md:px-14">
          <div>© 2023 Umair Dev</div>
          <div className="flex gap-4">
            <Link target="_blank" href="https://www.upwork.com/freelancers/~01c17e54aa962b06b6" className="text-gray-500 hover:text-white mr-4">
              <SiUpwork size={23} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/umairgopang1/" className="text-gray-500 hover:text-white mr-4">
              <FaFacebook size={23} />
            </Link>
            <Link target="_blank" href="https://instagram.com/umair_raaz?igshid=MmVlMjlkMTBhMg==" className="text-gray-500 hover:text-white">
              <FaInstagram size={23} />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/in/umairaligopang/" className="text-gray-500 hover:text-white mr-4">
              <FaLinkedin size={23} />
            </Link>
            <Link target="_blank" href="https://github.com/UmairRaaz" className="text-gray-500 hover:text-white mr-4">
              <FaGithub size={23} />
            </Link>
            <Link target="_blank" href="https://twitter.com/umairraaz" className="text-gray-500 hover:text-white">
              <FaXTwitter size={23} />
            </Link>
          </div>
          <div className="text-gray-500">IMPRINT</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
