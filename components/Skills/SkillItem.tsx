import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Props {
  index: number;
  skill: string;
  isVisible: boolean;
}

const SkillItem: FC<Props> = ({ index, skill, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ ease: "easeInOut", delay: index * 0.2, duration: 0.3 }}
    >
      <div className="grid grid-rows-[2fr_1fr_1fr]  max-w-[360px] max-h-[360px] p-[30px] shadow-xl rounded-3xl cursor-pointer hover:shadow-2xl duration-150">
        <Image
          className="object-contain"
          width={100}
          height={100}
          src={`/skill${index ? "-" + index : ""}.png`}
          alt={"skill img"}
        />
        <p className="text-[24px] text-[#2E323B] font-semibold">{skill}</p>
        <p className="text-[18px] text-[#61646B]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus eius magni placeat alias cum dolores ut! Maiores
        </p>
      </div>
    </motion.div>
  );
};

export default SkillItem;
