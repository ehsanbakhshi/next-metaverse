"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";

const Header = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className="innerWidth mx-auto flex justify-between gap-8">
        <Image
          src="/search.svg"
          alt="search"
          width={24}
          height={24}
          className="object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          METAVERSES
        </h2>
        <Image
          src="/menu.svg"
          alt="menu"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
    </motion.nav>
  );
};

export default Header;
