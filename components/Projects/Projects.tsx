import { IProjects } from "../../pages/api/projects";
import ProjectItem from "./ProjectItem";

export const preloadProjects = () => {
  void getProjects();
};

export const getProjects = async () => {
  const request = await fetch("http://localhost:3000/api/projects", {
    cache: "no-cache",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await request.json();
};

export default async function Projects() {
  const { projects }: IProjects = await getProjects();

  return (
    <div>
      <h5
        id="projects"
        className="text-5xl text-[#2E323B] py-5 text-center font-bold"
      >
        My works
      </h5>
      <div className="grid gap-[50px] grid-flow-row justify-center px-5 py-[100px]  xl:grid-cols-projects xl:justify-between xl:gap-10">
        {projects.map((project, i) => {
          return <ProjectItem key={i} {...project} />;
        })}
      </div>
    </div>
  );
}
