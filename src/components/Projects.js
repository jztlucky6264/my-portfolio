import React from "react";
import { IoLogoGithub, IoLogoReact } from "react-icons/io5";
import { Gitprojects } from "../Data";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      <section
        className="flex flex-wrap items-center justify-evenly my-24 gap-4"
        id="projects"
      >
        {Gitprojects &&
          Gitprojects.map((n, i) => (
            <motion.div
              data-aos="fade-up"
              key={n.id}
              className="border   border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out"
            >
              <p className="text-lg text-textBase font-medium uppercase">
                {n.name.length > 20 ? `${n.name.slice(0, 20)}...` : n.name}
              </p>
              <div className=" h-36 ">
                <img
                  src={n.imageSrc}
                  className="w-full h-full object-cover rounded-md my-4"
                  alt=""
                />
              </div>

              <div className="flex flex-1 items-center justify-between">
                <p className="text-lg text-gray-300">
                  Technologies
                  <span className="block text-sm text-gray-500">{n.techs}</span>
                </p>
                <a href={n.Deploy}>
                  <motion.div whileTap={{ scale: 0.5 }}>
                    <IoLogoReact className="text-textBase text-3xl cursor-pointer" />
                  </motion.div>
                </a>
                <a href={n.github}>
                  <motion.div whileTap={{ scale: 0.5 }}>
                    <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                  </motion.div>
                </a>
              </div>
            </motion.div>
          ))}
      </section>
    </>
  );
};

export default Projects;
