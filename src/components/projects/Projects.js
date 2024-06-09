import React from "react";
import {
  workImgFour,
  workImgSix,
  workOneImg,
  workTwoImg,
  workThreeImg,
  workFourImg,
  workFiveImg,
  workSixImg,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Amazon Clone"
            category="Website"
            image={workOneImg}
          />
          <ProjectsCard
            title="Music Website"
            category="Design"
            image={workTwoImg}
          />
          <ProjectsCard
            title="Ottaawa's Kabab Clone"
            category="Website"
            image={workSixImg}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Responsive website"
            category="E-commerce"
            image={workImgSix}
          />
          <ProjectsCard
            title="Dr. Abdul Qadeer Khan"
            category="Website"
            image={workFiveImg}
          />
          <ProjectsCard
            title="Restraunt Website"
            category="Website"
            image={workFourImg}
          />
          <ProjectsCard
            title="My Profile"
            category="Portfolio"
            image={workThreeImg}
          />
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgFour}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
