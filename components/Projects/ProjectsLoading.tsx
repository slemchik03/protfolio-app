import { FC } from "react";

const emptyProjects = ["", "", ""];

const ProjectsLoading: FC = () => {
  return (
    <div className="grid gap-[50px] grid-flow-row justify-center px-5 py-[100px]  xl:grid-cols-projects xl:justify-between xl:gap-10">
      {emptyProjects.map((_, i) => {
        return (
          <div
            key={i}
            className="w-[500px] cursor-pointer hover:scale-110 animate-pulse group shadow-2xl rounded-3xl duration-150"
          ></div>
        );
      })}
    </div>
  );
};

export default ProjectsLoading;
