import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { Gitprojects } from "../Data";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="   flex flex-wrap items-center justify-evenly my-24 gap-4"
      >
        {Gitprojects &&
          Gitprojects.map((n) => (
            <div
              key={n.id}
              className=" m-4 border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[250px] hover:border-zinc-600 duration-100 ease-in-out "
            >
              <p className=" text-lg text-textBase font-medium uppercase">
                {n.name.length > 16 ? `${n.name.slice(0, 16)}...` : n.name}
              </p>
              "
              <img
                className=" w-full h-full object-cover rounded-md my-4"
                src={n.imagesrc}
                alt=""
              />
              <div className="flex flex-1 items-center justify-between ">
                <p className="text-lg text-gray-300">
                  Technologies
                  <span className="block text-sm  text-gray-500">
                    {n.techs}
                  </span>
                </p>
                <a href="#">
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                  </motion.div>
                </a>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default Projects;
