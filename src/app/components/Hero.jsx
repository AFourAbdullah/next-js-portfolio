"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
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
    <div className="w-screen flex flex-col items-center justify-around md:h-80 md:flex-row">
      <div className="flex flex-col justify-between h  md:h-[200px] pl-5 h-80 pb-2">
        <h2 className="text-5xl font-bold text- text-gray-900">
          Muhammad Abdullah Aziz
        </h2>
        <h4 className="text-2xl text-gray-600">
          I am a{" "}
          <span className="text-2xl text-gray-900 font-extrabold" ref={spanRef}>
            {}
          </span>
        </h4>
        <div className="flex w-screen md:w-60 justify-center items-center gap-8">
          <div className="w-12 h-12 rounded-full border  border-slate-900 shadow-md flex items-center justify-center shadow-slate-400">
            <a href="" className="text-xl text-blue-950 font-bold">
              <FiGithub />
            </a>
          </div>
          <div className="w-12 h-12 rounded-full border  border-slate-900 shadow-md flex items-center justify-center shadow-slate-400">
            <a href="" className="text-xl text-blue-950 font-bold">
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <Image src={animation} />
    </div>
  );
};

export default Hero;