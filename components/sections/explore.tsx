"use client";

import { TitleText, TypingText } from "@/components/custom-texts";

import ExploreCard from "../explore-card";
import { exploreWorlds } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useState } from "react";

const Explore = () => {
  const [active, setActive] = useState("world-2");
  return (
    <section className="paddings" id="explore">
      <motion.div
        variants={staggerContainer(0.3, 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| The World" className="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          className="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={index}
              data={world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
