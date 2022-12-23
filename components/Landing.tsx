"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

const Landing: FC = () => {
  return (
    <div className="relative grid grid-flow-col justify-between pt-[180px]">
      <motion.div
        initial={{ translateX: "-1000%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="grid grid-flow-row max-w-full text-center md:text-left md:max-w-[550px] gap-[40px]"
      >
        <h1 className="text-[33px] md:text-[53px] xl:text-[63px] text-[#2E323B] font-semibold">
          Hello I`m Vadim Savin - Front-End developer
        </h1>
        <p className="text-[#61646B] text-[15px] md:text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem reiciendis excepturi quae vitae maxime quod dolorum
          cupiditate id modi, neque nobis. Impedit deleniti repellendus
          provident ad eaque debitis labore tempore.
        </p>
        <a
          href="/#projects"
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50  font-semibold rounded-lg text-[16px] md:text-xl px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Go to my works!
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="absolute hidden md:block md:right-[-40%] top-[100px] "
      >
        <Image
          src={"/header-img.png"}
          width={600}
          height={408}
          className="object-cover"
          alt="img"
        />
      </motion.div>
    </div>
  );
};

export default Landing;
