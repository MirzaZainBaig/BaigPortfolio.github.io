import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Frontend Development"
        subTitle="I have developed the front end for many websites and have a good understanding of front-end development."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Full Stack Development"
        subTitle="I have experience with back-end development in PHP and am actively learning new technologies like Node.js to further enhance my skills."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Pythonista" 
        subTitle=" I'm skilled in Python and can effectively develop basic projects. Let's team up and collaborate on some projects. What ideas or goals are you considering?"
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="C++" 
        subTitle="
Given my strong proficiency in C++, I've completed numerous projects. What specific projects or ideas are you interested in working on together?"
      />
    </div>
  );
};

export default MyServices;
