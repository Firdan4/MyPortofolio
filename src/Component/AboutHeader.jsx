import React from "react";

const AboutHeader = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around w-full h-[80vh] px-9 md:px-24">
        <div className="flex justify-center">
          <img
            className="w-[50%] md:w-[60%] hidden md:block hover:scale-105 duration-300"
            src={require("../Assets/banner-img-about.png")}
            alt=""
          />
        </div>
        <div className="flex flex-col text-center md:text-left md:w-[50%] md:px-5">
          <h1 className="text-3xl font-extrabold">
            About <span className="text-orange-500">Me</span>
          </h1>
          <p className="md:w-[70%]">
            Lulusan S1 dengan spesialisasi Pendidikan Teknik Informatika dan
            Komputer. Memiliki pengalaman satu tahun dalam mengembangkan dan
            membangung Website SMK Negeri 4 Sijunjung, yang responsive. Saat ini
            mencari peluang kerja yang memberi kesempatan untuk semakin
            berkembang.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
