"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";
import SkillItem from "./SkillItem";

interface Props {
  skills: string[];
}

const SkillsList: FC<Props> = ({ skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scrollHandler = useCallback(() => {
    const { current } = ref;

    if (current && current.offsetTop <= window.scrollY + 200) {
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
    <div ref={ref} className="grid grid-flow-row justify-center py-[65px]">
      <h2 className="text-[#2E323B] text-[48px] font-semibold text-center py-7">
        My skills
      </h2>
      <div className="grid grid-flow-row justify-center xl:grid-cols-3 gap-5 ">
        {skills.map((skill, i) => {
          return (
            <SkillItem key={i} index={i} skill={skill} isVisible={isVisible} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsList;
