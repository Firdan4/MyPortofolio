import React from "react";
import "../index.css";
import Button1, { Button2 } from "./Button";
import ImgUser from "../Assets/banner-img-about.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-full md:px-[3%]">
        <div className="relative flex md:flex-row flex-col md:px-28 items-center w-full md:h-screen gradiens justify-around overflow-hidden">
          <div className="flex flex-col md:w-[40%] justify-center md:items-start items-center">
            <h1 className="text-2xl font-semibold text-blue-500 my-8">
              Welcome to Portofolio Website
            </h1>
            <h2 className="md:text-left text-center text-5xl font-medium font">
              Hi, My Name's <br /> Heru Firdan I'am
              <br />
              <span className="font-black text-orange-500">
                Front And Developer
              </span>
            </h2>
            <p className="text-center md:text-left text-gray-600 font-semibold py-4">
              Fresh Graduate and young Front and Developer with one year
              experience in School Country, but I have great motivation to
              create something more extraordinary
            </p>
            <div className="md:flex md:gap-8">
              <Link to="/portofolio">
                <Button1 contactProps="My Project" />
              </Link>
              <Link to="/contact">
                <Button2 contactProps="Talk Me" />
              </Link>
            </div>
          </div>
          <div className="md:block md:w-[45%]">
            <img className="" src={ImgUser} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
