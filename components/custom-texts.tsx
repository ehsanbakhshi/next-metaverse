"use client";

import { textContainer, textVariant2 } from "@/utils/motion";

import { motion } from "framer-motion";

interface TypingTextProps {
  title: string;
  className: string;
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

export const TitleText = () => <h2>Title Text</h2>;
