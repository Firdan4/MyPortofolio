import React from "react";
import { Link } from "react-router-dom";
import ApiPortofolio from "../Component/ApiPortofolio";
import { Button2 } from "../Component/Button";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

const Portofolio = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col items-center pt-32 w-full p-10">
          <h1 className="text-3xl font-semibold">
            Porto<span className="text-orange-500">folio!</span>
          </h1>
          <p className="text-center w-[90%] xl:w-[60%] lg:w-[60%]">
            Saya memiliki ketertarikan dan hobi dalam coding, itu di mulai dari
            sejak bangku perkuliahan, dan setelah saya lulus desember 2022
            kemaren selama itu saya juga sudah menyelesaikan beberapa project
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 h-auto p-5 gap-4 justify-center items-center bg-slate-300 w-full">
          {ApiPortofolio.map(({ judul, image, desc, linkS }) => (
            <div className="flex flex-col gap-2 shadow-lg p-4 rounded-lg hover:scale-105 duration-300 h-[90%] bg-white">
              <h1 className="font-extrabold">{judul}</h1>
              <div className="overflow-hidden">
                <img className="rounded-md" src={image} alt="" />
              </div>
              <p className="w-72 text-sm text-gray-600">{desc}</p>
              <div>
                <Link to={linkS}>
                  <Button2 contactProps="View" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portofolio;
