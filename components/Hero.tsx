"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/Lamp";
import MotionButton from "./ui/MotionButton";

const buttonVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex justify-between">
          <div className="flex space-x-10 ml-12 mt-8 items-center">
            <MotionButton
              imageSrc={"../images/github-mark.png"}
              icon={undefined}
              position={""}
              handleClick={() => window.open("https://github.com/daviswingard")}
              otherClasses="w-8 h-8"
            />
            <MotionButton
              imageSrc={"../images/linkedin.png"}
              icon={undefined}
              position={""}
              handleClick={() =>
                window.open("https://www.linkedin.com/in/daviswingard/")
              }
              otherClasses="w-20 h-12"
            />
            <MotionButton
              imageSrc={"../images/instagram.png"}
              icon={undefined}
              position={""}
              handleClick={() =>
                window.open("https://www.instagram.com/davis.wingard/")
              }
              otherClasses="w-8 h-8"
            />
          </div>
          <div className="mr-12 mt-8 flex items-center">
            <MotionButton
              title={"davisewingard@gmail.com"}
              icon={undefined}
              position={""}
            />
          </div>
        </div>

        <LampContainer>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-teal-200 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Hi, <br /> I'm Davis.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 7 }}
            transition={{
              delay: 1.9,
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-br from-teal-100 to-slate-600 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-2xl"
          >
            I'm a software developer based in Redlands, California.
          </motion.h2>
        </LampContainer>
      </div>
    </div>
  );
};

export default Hero;
