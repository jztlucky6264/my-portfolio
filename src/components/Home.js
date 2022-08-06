import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className=" relative" id="home">
      <Spline scene="https://prod.spline.design/Mw355wJJMOrs0tsH/scene.splinecode" />
      <div className=" mb-10 absolute bottom-10 w-full justify-center items-center flex">
        <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
          <p className="text-textBase"> Press and drag to orbit</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
