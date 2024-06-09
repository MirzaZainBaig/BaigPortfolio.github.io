import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-4 px-6">
      <div className="col-span-9 md:col-span-3">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge=""
          title="Graduation"
          subTitle="Superior University, Lahore"
          des="I am doing BSCS from Superior University. 6th semester is going on!"
        />
        <ResumeCard
          badge="2019 - 2021"
          title="Intermediate"
          subTitle="Superior Collage"
          des="I passed inetermediate from superior collage kalma chock campous in Pre Engineering!"
        />
        <ResumeCard
          badge="2017 - 2019"
          title="Matric"
          subTitle="Lahore Learnng School"
          des="I passed Matric from Lahore Learnng School with 60% marks!"
        />
        <ResumeCard
          badge="2014"
          title="Hafiz-e-Quran"
          subTitle="Iqra Taleem Ul Itfal Foudation"
          des="I got the degree of Hafiz-e-Quran in 6th class with 72% marks!"
        />
      </div>

      {/* <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div> */}

      {/* <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Pythonista"
          subTitle="Facebook Inc."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge=" 2022-Present "
          title="Front-end Developer"
          subTitle="Google Inc."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
        <ResumeCard
          badge="2024-Present"
          title="Data Scientist"
          subTitle="ReactBD.com."
          des="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, itaque ipsa quae!"
        />
      </div> */}
    </div>
  );
};

export default Education;
