"use client";

import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import DualLoader from "./DualLoader"; // Import the DualLoader component

const Main: React.FC = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developer.", "Web Designer."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex xl:justify-between max-2xl:text-center max-2xl:justify-center max-md:text-center max-lg:text-center sm:text-center md:text-center lg:text-center max-md:w-[365px]">
        <motion.div
          className="mx-16 my-56 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[45px] pacifico-regular md:flex max-lg:justify-center max-lg:items-center max-lg:text-center">
            Welcome To{" "}
            <span className="text-cyan-400 pacifico-regular">&lt;/&gt;</span>
            Aliyan<span className="text-cyan-400 pacifico-regular">Dev</span>
          </h1>
          <span className="App text-[35px] text-cyan-400">
            <span className="pacifico-regular" ref={el}></span>
          </span>
        </motion.div>
        <DualLoader /> {/* Add the DualLoader component here */}
      </div>
    </>
  );
};

export default Main;
