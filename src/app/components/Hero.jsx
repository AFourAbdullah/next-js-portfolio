"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import animation from "../../../public/animation.gif";
import Image from "next/image";
import Typed from "typed.js";

const Hero = () => {
  const words = [
    "Software Engineer",
    "Full Stack Web Developer",
    "Full Stack Blockchain Developer",
  ];
  const options = {
    strings: words,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: "|",
  };
  const spanRef = useRef(null);
  useEffect(() => {
    let typed = new Typed(spanRef.current, options);
  }, []);

  return (
    <div className="w-screen pb-10 flex flex-col items-center justify-around md:h-[100vh] lg:flex-row border-1 border-teal-950 mt-20">
      <div className="flex flex-col justify-between items-center  lg:h-[200px] pl-5 h-60 pb-2 w-[60%]">
        <h2 className="md:text-5xl font-bold text-2xl text-center text-gray-900">
          Muhammad Abdullah Aziz
        </h2>
        <h4 className="text-2xl text-gray-600">
          I am a{" "}
          <span
            className="md:text-xl text-gray-900 font-extrabold"
            ref={spanRef}
          >
            {}
          </span>
        </h4>
        <div className="flex w-screen md:w-60 justify-center items-center gap-8">
          <div className="w-12 h-12 rounded-full border text-blue-95  border-slate-900 shadow-md hover:bg-blue-950 hover:text-white cursor-pointer flex items-center justify-center shadow-slate-400">
            <a href="" className="text-xl 0 font-bold ">
              <FiGithub />
            </a>
          </div>
          <div className="w-12 h-12 rounded-full border text-blue-950  border-slate-900 shadow-md hover:bg-blue-950 hover:text-white cursor-pointer flex items-center justify-center shadow-slate-400">
            <a href="" className="text-xl  font-bold">
              <FiLinkedin />
            </a>
          </div>
          <div className="w-12 h-12 rounded-full border text-blue-950  border-slate-900 shadow-md hover:bg-blue-950 hover:text-white cursor-pointer flex items-center justify-center shadow-slate-400">
            <a href="" className="text-xl  font-bold">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <Image src={animation} />
    </div>
  );
};

export default Hero;
