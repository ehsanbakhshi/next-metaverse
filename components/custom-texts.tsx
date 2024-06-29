"use client";

import { textContainer, textVariant2 } from "@/utils/motion";

import { motion } from "framer-motion";

interface TypingTextProps {
  title: string;
  className?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title, className }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${className}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps {
  title: any;
  className?: string;
}

export const TitleText: React.FC<TitleTextProps> = ({ title, className }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${className}`}
  >
    {title}
  </motion.h2>
);
