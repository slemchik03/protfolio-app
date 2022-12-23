"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";

const Banner: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollHandler = useCallback(() => {
    const { current } = ref;

    if (current && current.offsetTop <= window.scrollY + 500) {
      return setIsVisible(true);
    }
    setIsVisible(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-flow-row text-center xl:grid-flow-col xl:text-left justify-center items-center"
    >
      <motion.div
        initial={{ translateX: "-1000%", opacity: 0 }}
        animate={{
          translateX: isVisible ? 0 : "-1000%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="grid gap-5 max-w-[550px]"
      >
        <h4 className="text-[28px] md:text-[38px] xl:text-[48px] text-[#2E323B] font-bold">
          Unique Solutions for Your Business
        </h4>
        <p className="text-[18px] text-[#61646B]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          recusandae ipsum mollitia maiores, expedita sequi accusamus suscipit
          cupiditate. Aliquid, voluptatem ex! Asperiores modi fuga natus,
          assumenda inventore sed aliquid quod?
        </p>
      </motion.div>
      <motion.div
        initial={{ translateX: "1000%", opacity: 0 }}
        animate={{
          translateX: isVisible ? 0 : "1000%",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          className="object-cover"
          width={626}
          height={600}
          src={"/banner.png"}
          alt="banner img"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
