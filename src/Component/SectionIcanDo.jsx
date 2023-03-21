import React from "react";
import ApiSkill from "./ApiSkill";

const SectionIcanDo = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto">
      <div className="flex flex-col gap-20 py-8 items-start px-[11.5%] md:w-[94%] bg-zinc-200">
        <div>
          <h1 className="text-4xl font-black ">Eksperience</h1>
          <p className="text-gray-600">
            Abilities that I have learned and applied in several my projects
          </p>
          <span className="relative h-11 w-11 bg-black"></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-5 justify-center items-center">
          {ApiSkill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center shadow-md ${style} rounded-xl hover:scale-105 duration-300`}
            >
              <img className="w-[30%]" src={src} alt="" />
              <h1 className="font-semibold">{title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionIcanDo;
