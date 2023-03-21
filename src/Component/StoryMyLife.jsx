import React from "react";
import ApiStoryofmylife from "./ApiStorymylife";

const StoryMyLife = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto border py-12 gap-10 bg-zinc-200">
      <div>
        <h1 className="text-2xl font-bold">
          Story of <span className="text-orange-500">My</span> Life
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ApiStoryofmylife.map(({ judul, poin1, poin2, subpoin1, subpoin2 }) => (
          <div className="relative box-content flex flex-col gap-5 text-center shadow-md rounded-lg shadow-orange-500 hover:scale-105 duration-300 p-10">
            <h1 className="text-lg font-semibold text-slate-700">{judul}</h1>
            <div className="text-left">
              <h2>{poin1}</h2>
              <p className="text-gray-600">{subpoin1}</p>
            </div>
            <div className="text-left">
              <h2>{poin2}</h2>
              <p className="text-gray-600">{subpoin2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryMyLife;
