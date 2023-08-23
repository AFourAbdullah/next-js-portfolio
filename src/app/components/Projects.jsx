import React from "react";
import { projects } from "./data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="w-screen flex flex-col items-center   pb-6">
      <h2 className="text-black text-5xl my-9">Projects</h2>
      <div className="w-[80%] flex flex-wrap justify-between items-center h-full md:h-[90%]">
        {projects.map((project) => (
          <div className="md:w-[45%] lg:w-[26%] w-[90%] h-[360px] mt-3 mb-7  rounded-3xl shadow-2xl shadow-gray-800  border-black">
            <Image
              src={project.image}
              className="w-full h-[80%] object-cover"
              width={0}
              height={0}
              unoptimized
            />
            <div className="flex w-full justify-around bg-slate-800 h-[20%] items-center">
              <h4 className="text-xl text-zinc-300 font-semibold">
                {project.name}
              </h4>
              <div className="flex justify-around w-[20%] text-white text-xl">
                <a href={`${project.githubUrl}`}>
                  <FaGithub />
                </a>
                <a href={`${project.link}`}>
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
