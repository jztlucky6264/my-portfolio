import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen  min-h-screen flex-col  relative bg-primary  pb-20">
        {/* Navigation Bar */}
        <Navbar />
        <Home />

        {/* Main section */}
        <main className=" w-auto mt-5 ">
          {/* About section */}
          <About />
        </main>
        <div className="m-auto">
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </AnimatePresence>
  );
};

export default App;
