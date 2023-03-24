import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-slate-900 text-white flex flex-col justify-center items-center p-2 gap-2 w-full">
        <div className="flex gap-5">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
          <FaYoutube />
        </div>
        <ul className="flex gap-5">
          <Link to="/">
            <li className="font-bold text-[15px] hover:text-orange-500">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="font-bold text-[15px] hover:text-orange-500">
              About
            </li>
          </Link>
          <Link to="/portofolio">
            <li className="font-bold text-[15px] hover:text-orange-500">
              Portofolio
            </li>
          </Link>
        </ul>
        <p>
          Copyright &copy; 2023 by{" "}
          <span className="text-orange-500">Heru Firdan</span> All right
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
