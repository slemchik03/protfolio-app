import { preloadProjects } from "../components/Projects/Projects";
import { preloadSkills } from "../components/Skills/Skills";
import HomePage from "./HomePage";

export default async function Page() {
  // Using preload pattern from official documentation by Next.js
  preloadProjects();
  preloadSkills();

  return (
    <div className="overflow-x-hidden">
      {/* @ts-ignore Server Component */}
      <HomePage />
    </div>
  );
}
