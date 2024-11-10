"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedImage";
import Link from "next/link";

const Service: React.FC = () => {
  return (
    <>
      <h1 className="text-3xl pacifico-regular text-cyan-700 dark:text-cyan-400 flex justify-center my-9">
        Our Services
      </h1>
      <hr className="bg-slate-200 my-2 mx-5 h-[2px]" />
      <div className="flex xl:justify-around md:justify-between md:ml-14 md:gap-40 max-sm:flex-col my-20 ">
        {/* Web Designing */}
        <AnimatedSection className="relative group my-20 overflow-hidden rounded-xl shadow-2xl shadow-slate-900">
          <div className="relative">
            <Image
              src={"/des.png"}
              alt="Web Designing"
              width={430}
              height={430}
              className="transition-transform duration-500 ease-in-out object-fill"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-white text-3xl pacifico-regular font-bold">Web Designing</h1>
            <p className="text-white text-lg pacifico-regular text-center mb-4">
              Create visually appealing and user-friendly websites tailored to
              your needs.
            </p>
            <Link href="#contact">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium transition-colors duration-300 text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 focus:ring-0">
                <span className="relative px-5 py-2.5 pacifico-regular transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact Us
                </span>
              </button>
            </Link>
          </div>
        </AnimatedSection>

        {/* Web Development */}
        <AnimatedSection className="relative group my-20 overflow-hidden rounded-xl shadow-2xl shadow-slate-900">
          <div className="relative">
          <Image
              src={"/dev.png"}
              alt="Web Designing"
              width={430}
              height={430}
              className="transition-transform duration-500 ease-in-out object-fill"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="text-white text-3xl pacifico-regular font-bold">Web Development</h1>
            <p className="text-white text-lg pacifico-regular text-center mb-4">
              Create scalable and efficient web applications to meet your
              business needs.
            </p>
            <Link href="#contact">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium transition-colors duration-300 text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 focus:ring-0">
                <span className="relative px-5 py-2.5 pacifico-regular transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Contact Us
                </span>
              </button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Service;