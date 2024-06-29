"use client";

import { TitleText, TypingText } from "../custom-texts";

import InsightCard from "../insight-card";
import { insights } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const Insights = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <TypingText title="| Insight" className="text-center" />
      <TitleText title="Insight about metaverse" className="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={index} data={insight} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
