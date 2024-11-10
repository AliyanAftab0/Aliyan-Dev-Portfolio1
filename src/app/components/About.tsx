"use client";
import React from "react";
import Image from "next/image";
import AnimatedParagraph from "./AnimatedParagraph";

const About = () => {
  return (
    <>
      <h1 className="text-3xl text-cyan-700 dark:text-cyan-400 pacifico-regular flex justify-center my-9">
        About US
      </h1>
      <div className="border-2 xl:h-[28rem] lg:h-[33rem] md:h-[26rem] sm:h-[29rem] md:w-[49rem] max-md:text-center max-sm:w-[20rem] max-sm:h-[43rem] lg:w-[60rem] 2xl:w-[88rem] rounded-lg flex flex-col shadow-2xl mt-8 mb-28 mx-auto max-sm:mx-auto">
        <span className="h-3 max-md:absolute max-md:top-[45rem] max-sm:-ml-3 max-md:left-[6.5rem] lg:absolute lg:top-[47rem] md:mt-24 2xl:mt-16 2xl:mb-0 max-md:flex-col 2xl:justify-between">
          <Image
            src={"/Logo.png"}
            width={200}
            height={200}
            alt="Logo"
          />
        </span>
        <span className="max-md:hidden flex">
          <hr className="h-[18rem] xl:h-[20rem] lg:h-[24.9rem] w-[2px] bg-gray-200 my-0 absolute 2xl:left-[27rem] md:left-[216px] xl:left-[260px] top-[47rem]" />
        </span>
        <span className="md:hidden">
          <hr className="bg-gray-400 absolute top-[56rem] max-sm:left-[4rem] left-[5rem] w-64" />
        </span>
        <span className="absolute xl:left-[19rem] 2xl:left-[29rem] xl:top-[48rem] md:top-[48rem] md:left-[16rem]  max-md:top-[58rem]">
          <AnimatedParagraph>
            <h1 className="lg:text-4xl max-lg:text-2xl max-sm:text-center max-md:absolute max-md:left-[5rem] max-md:w-[10rem] max-sm:my-4 lg:mb-4 pacifico-regular">About ME</h1>
            <p className="text-sm pacifico-regular md:w-[35rem] max-lg:text-[13.5px] max-md:absolute max-md:top-[5rem] max-md:left-[1rem] max-sm:w-[17rem] lg:text-lg w-[20rem] lg:w-[45rem] xl:w-[58rem] 2xl:w-[71rem]">
              Hello! I’m Aliyan Aftab, a dedicated Frontend Developer with a
              year of experience in crafting beautiful and functional web
              applications. My expertise spans a range of technologies including
              ReactJS, NextJS with TypeScript, and Tailwind CSS. I thrive on
              creating seamless user experiences and am always on the lookout
              for innovative ways to enhance web design. In addition to my
              frontend skills, I have a strong background in Python development,
              which allows me to bring a versatile approach to my projects.
              Whether it’s building intuitive interfaces or diving into backend
              solutions, I enjoy leveraging my skills to create comprehensive
              and efficient solutions. I’m passionate about learning and growing
              in the tech space, and I approach every project with enthusiasm
              and a problem-solving mindset. If you’re interested in
              collaborating or just want to chat about tech trends, feel free to
              reach out. I’d love to connect and exchange ideas! Thanks for
              visiting!
            </p>
          </AnimatedParagraph>
        </span>
      </div>
    </>
  );
};

export default About;
