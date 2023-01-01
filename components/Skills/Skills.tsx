import { ISkills } from "../../pages/api/skills";
import LoadError from "../LoadError";
import SkillsList from "./SkillsList";

const getSkills = async (): Promise<ISkills | null> => {
  try {
    const response = await fetch(`${process.env.BUILD_URL}/api/skills`, {
      cache: "no-cache",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: ISkills | null = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export const preloadSkills = () => {
  void getSkills();
};

export default async function Skills() {
  const skillsResponse = await getSkills();

  if (skillsResponse) {
    const { skills } = skillsResponse;
    return <SkillsList skills={skills} />;
  }

  return (
    <LoadError title="Couldn`t load a skills, please refresh the page or try later." />
  );
}
