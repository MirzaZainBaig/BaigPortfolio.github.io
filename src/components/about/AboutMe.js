import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Mriza Muhammad Zain Baig</h2>
          <p className="text-base leading-6 ">
          Skilled in Python for basic projects, proficient in C++ with project experience, and keen on web development with expertise in HTML, CSS, JavaScript and PHP. Experienced in crafting web applications and eager to explore new technologies.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            20
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Pakistan
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Pakistan, Lahore
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
