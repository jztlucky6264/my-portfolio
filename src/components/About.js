import React from "react";
import Lucky from "../images/meri_pic.jpeg";
import { motion } from "framer-motion";
import Resume from "../Resume/DURGA's Resume.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
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
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
        id="about"
      >
        <div className="w-full h-420 flex items-center justify-center">
          <div
            data-aos="fade-right"
            className="w-275 h-340 relative bg-emerald-200 rounded-md"
          >
            <img
              src={Lucky}
              alt="avatar"
              className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
            />
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="w-full h-420 flex flex-col items-center justify-center "
        >
          <p className="text-lg text-textBase text-center">
            I am a 4th Year Undergrad at NSUT(East Campus) Delhi pursuing B.Tech
            in ECE. I have basic knowledge at Data Structures and algorithms and
            have a strong foundation in cpp and Logical Problem Solving.
            Experienced in working on the latest Web development technologies
            ranging from React Js, Node Js, and Boostrap, and basics like HTML,
            CSS, and Javascript.
          </p>

          <motion.button
            whileTap={{ scale: 0.8 }}
            className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
          >
            <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href={Resume} color="transparent" download="Durga's Resume">
                Download
              </a>
            </span>
          </motion.button>
        </div>
      </section>
    </>
  );
};

export default About;
