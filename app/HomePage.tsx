import { Suspense } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Projects from "../components/Projects/Projects";
import ProjectsLoading from "../components/Projects/ProjectsLoading";
import Skills from "../components/Skills/Skills";
import SkillsLoading from "../components/Skills/SkillsLoading";

export default async function HomePage() {
  return (
    <>
      <div className="bg-[#EEF4FF] min-h-screen">
        <div className="max-w-[1150px] mx-auto px-4">
          <Header />
          <Landing />
        </div>
      </div>
      <div className="px-[15px]">
        <Suspense fallback={<SkillsLoading />}>
          {/* @ts-ignore Server Component */}
          <Skills />
        </Suspense>
        <Banner />
        <Suspense fallback={<ProjectsLoading />}>
          {/* @ts-ignore Server Component */}
          <Projects />
        </Suspense>
      </div>
      <Footer />
    </>
  );
}