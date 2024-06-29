"use client";

import { TitleText, TypingText } from "../custom-texts";
import { fadeIn, planetVariants, staggerContainer } from "@/utils/motion";

import StartSteps from "../start-steps";
import { motion } from "framer-motion";
import { startingFeatures } from "@/constants";

const GetStarted = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={planetVariants("left")}
        className="flex-1 flexCenter"
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaverses Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps key={index} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
