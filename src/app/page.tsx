"use client"

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const fadeInOut = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  return (
    <>
      <div className="max-sm:w-screen max-md:w-screen max-lg:w-screen dark:text-white">
        <Navbar />
        <AnimatePresence>
          <motion.section
            id="home"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Main />
          </motion.section>
          <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
          <motion.section
            id="about"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <About />
          </motion.section>
          <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
          <motion.section
            id="toolkit"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Toolkit />
          </motion.section>
          <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
          <motion.section
            id="services"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Service />
          </motion.section>
          <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
          <motion.section
            id="contact"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeInOut}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Contact />
          </motion.section>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
}
