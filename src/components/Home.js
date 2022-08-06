import React from "react";
import Spline from "@splinetool/react-spline";

const Home = () => {
  return (
    <div className="relative w-full h-full" id="home">
      <Spline scene="https://prod.spline.design/oo6IxFu8UDjFUmjD/scene.spline" />
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl ">
          <p className="text-white">Press and drag to orbit</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
