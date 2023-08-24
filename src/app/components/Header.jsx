"use client";
import { useState } from "react";
import menu from "../../../public/menu.svg";
import close from "../../../public/close.svg";
import logo from "../../../public/looo.png";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center  w-screen fixed top-0 left-0  z-50">
      <div className="flex md:flex-row  flex-col items-center w-[100%] justify-around ">
        <div className="mr-0 md:flex-row">
          {/* Your logo */}
          <Image src={logo} alt="Logo" className="h-8 block w-8" />
        </div>
        <div className="hidden md:flex space-x-4 w-[60%] text-lg gap-40 justify-start ">
          {/* Your navigation links */}
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="#" className="hover:text-gray-300">
            Skills
          </a>
          <a href="#" className="hover:text-gray-300">
            Projects
          </a>
        </div>
      </div>
      <div className="md:hidden">
        {/* Hamburger icon */}
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? (
            <Image src={close} alt="Menu" width={24} height={24} />
          ) : (
            <Image src={menu} alt="Menu" width={24} height={24} />
          )}
        </button>
        {/* Mobile navigation */}
        {isOpen && (
          <div className="bg-gray-800 block w-screen transition delay-1000 duration-1000 ease-in-out absolute top-0 left-0 mt-16">
            <a
              href="#"
              className="text-center block py-2 px-4 hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#"
              className=" text-center block py-2 px-4 hover:bg-gray-700"
            >
              Skills
            </a>
            <a
              href="#"
              className=" text-center block py-2 px-4 hover:bg-gray-700"
            >
              Projects
            </a>
            <a
              href="#"
              className=" text-center block py-2 px-4 hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        )}
      </div>
      <div className="hidden md:block">
        {/* Contact button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-5">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Header;
