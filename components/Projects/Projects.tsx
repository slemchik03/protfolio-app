import { IProjects } from "../../pages/api/projects";
import LoadError from "../LoadError";
import ProjectItem from "./ProjectItem";

export const preloadProjects = () => {
  void getProjects();
};

export const getProjects = async (): Promise<IProjects | null> => {
  try {
    const response = await fetch(`${process.env.BUILD_URL}/api/projects`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: IProjects | null = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export default async function Projects() {
  const projectsResponse = await getProjects();

  if (projectsResponse) {
    const { projects } = projectsResponse;

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

  return (
    <LoadError title="Couldn`t load a projects, please refresh the page or try later." />
  );
}
