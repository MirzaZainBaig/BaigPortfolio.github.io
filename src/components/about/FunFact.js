import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-1 md:grid-cols-2 pb-10">
      <FunFactCard icon={<SiAntdesign />} des="20+ Finished Projects" />
      <FunFactCard icon={<BiCodeAlt />} des="100+ hours of coding" />
    </div>
  );
};

export default FunFact;
