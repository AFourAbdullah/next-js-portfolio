import React from "react";
import { projects } from "./data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <div>
            <Image />
            <div>
              <h4>{project.name}</h4>
              <div className="flex ">
                <a href={`${project.link}`}>
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
