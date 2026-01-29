import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import DifferenceSection from "./DifferenceSection";
import CallToActionSection from "./CallToActionSection";
const AboutDetails = () => {
  return (
    <>
      <section className="py-20 w-full">
        <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
          <ItemLayout
            className={
              " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
            }
          >
            <h2 className="  text-xl md:text-2xl text-left w-full capitalize text-accent">
             Full Stack AI Developer
            </h2>
            <p className="font-light text-foreground text-xs sm:text-sm md:text-base   ">
              I am a passionate Full Stack AI Developer who loves building complete, production-ready applications from scratch. My expertise includes frontend development, backend APIs, database design, authentication, and AI integrations.

I have experience working on multiple projects and hackathons, where I focused on performance, security, and clean code. I am actively looking for opportunities where I can grow as a developer and contribute my skills to real-world products.
            </p>
          </ItemLayout>

          <ItemLayout
            className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
              15+ <sub className="font-semibold text-base">Projects</sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            8+{" "}
              <sub className="font-semibold text-base">hours daily learning</sub>
            </p>
          </ItemLayout>

          {/* <ItemLayout
            className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
          >
             <img
              // className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=SohaibTouseef125&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=ffffff&icon_color=FEFE5B&text_bold=false"
              alt="Languages"
              // loading="lazy"
              width={400}
              height={400}
            />

          </ItemLayout>

          <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
              className="w-full h-auto"
              src={`https://github-readme-stats.vercel.app/api?username=SohaibTouseef125&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=ffffff&icon_color=FEFE5B&text_bold=false`}
              alt="Sohaib"
              loading="lazy"
              width={400}
              height={400}
            />
          </ItemLayout> */}


        </div>
      </section>

      <SkillsSection />
      <ExperienceSection />
      <DifferenceSection />
      <CallToActionSection />
    </>
  );
};

export default AboutDetails;