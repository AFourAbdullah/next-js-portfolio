"use client";
import { useState } from "react";
import menu from "../../../public/menu.svg";
import close from "../../../public/close.svg";
import Image from "next/image";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center  w-screen fixed top-0 left-0  z-50">
      <div className="flex items-center w-[100%] justify-around">
        <div className="mr-0">
          {/* Your logo */}
          <img src="/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="hidden md:flex space-x-4 w-[60%] border-2 border-white">
          {/* Your navigation links */}
          <a href="#" className="hover:text-gray-300">
            Link 1
          </a>
          <a href="#" className="hover:text-gray-300">
            Link 2
          </a>
          <a href="#" className="hover:text-gray-300">
            Link 3
          </a>
          <a href="#" className="hover:text-gray-300">
            Link
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
          <div className="mt-2 ">
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Link 1
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Link 2
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Link 3
            </a>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700">
              Link 4
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
