"use client";
import React from "react";

import css from "../../../public/css.png";
import html from "../../../public/html.png";
import javascript from "../../../public/javascript.png";
import mongodb from "../../../public/mongodb.png";
import nodejs from "../../../public/nodejs.png";
import reactjs from "../../../public/reactjs.png";
import redux from "../../../public/redux.png";
import tailwind from "../../../public/tailwind.png";
import typescript from "../../../public/typescript.png";
import next from "../../../public/next.png";
import solidity from "../../../public/solidity.svg";

import hh from "../../../public/hh-removebg-preview (1).png";
import Image from "next/image";
import { motion } from "framer-motion";
const Tech = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "Next JS",
      icon: next,
    },
    {
      name: "Solidity",
      icon: solidity,
    },
    {
      name: "Hardhat",
      icon: hh,
    },
  ];
  return (
    <div
      className="bg-slate-900 md:py-16 py-4 w-[100vw] items-center flex flex-col"
      id="skills"
    >
      <h1 className="text-center text-5xl text-gray-400 font-extrabold mb-8">
        Skills
      </h1>
      <motion.div
        className="flex  flex-wrap py-4 justify-center gap-6 lg:w-[90%]   w-[90%]  items-center "
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {technologies.map((technology) => (
          <div
            className="lg:w-[15%] md:w-[25%] sm:w-[40%] w-[60%] shadow-2xl  bg-slate-800 h-48  rounded-3xl   flex flex-col items-center justify-center drop-shadow-2xl z-10"
            key={technology.name}
          >
            <Image
              src={technology.icon}
              alt={`${technology.name} Icon`}
              width={100}
              height={100}
            />
            <h4 className="text-gray-300 text-lg">{technology.name}</h4>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;
