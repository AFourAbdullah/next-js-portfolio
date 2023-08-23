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
import solidity from "../../../public/solidty.png";
import eth from "../../../public/eth.png";
import Image from "next/image";

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
      name: "Ethereum",
      icon: eth,
    },
  ];
  return (
    <div className="bg-slate-900 h-[100vh] py-4 w-[100vw] items-center flex flex-col">
      <h1 className="text-center text-5xl text-gray-400 font-extrabold mb-8">
        Skills
      </h1>
      <div className="flex  flex-row flex-wrap py-4 justify-center gap-6 w-[70%]   items-center ">
        {technologies.map((technology) => (
          <div
            className="w-[18%] bg-white h-44  rounded-3xl  bg-transparent flex flex-col items-center justify-center border-2 border-y-slate-700"
            key={technology.name}
          >
            <Image
              src={technology.icon}
              alt={`${technology.name} Icon`}
              width={100}
              height={100}
            />
            <h4 className="text-gray-700 text-lg">{technology.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
