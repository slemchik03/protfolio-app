import { FC } from "react";

const emptySkills = ["", "", "", "", "", ""];

const SkillsLoading: FC = () => {
  return (
    <div className="grid justify-center py-10">
      <div className="grid grid-flow-row justify-center xl:grid-cols-3 gap-5">
        {emptySkills.map((_, i) => {
          return (
            <div
              key={i}
              className="w-[360px] h-[360px] p-[30px] shadow-2xl animate-pulse rounded-3xl cursor-pointer hover:shadow-2xl duration-100"
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsLoading;
