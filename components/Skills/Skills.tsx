import SkillsList from "./SkillsList";

const getSkills = async () => {
  const request = await fetch("http://localhost:3000/api/skills", {
    cache: "no-cache",
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (await request.json()).skills;
};

export const preloadSkills = () => {
  void getSkills();
};

export default async function Skills() {
  const skills = await getSkills();
  return <SkillsList skills={skills} />;
}
