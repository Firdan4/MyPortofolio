import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Button1, { ButtonForMobile } from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hendleClick = () => setNav(!nav);
  const [changeNav, setChangeNav] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 50 ? setChangeNav(true) : setChangeNav(false);
  };
  window.addEventListener("scroll", changeNavBg);
  return (
    <div className="absolute z-50">
      <div
        className={
          !changeNav
            ? "fixed w-full justify-between items-center flex p-2 px-[13%] bg-transparent"
            : "fixed w-full justify-between items-center flex p-2 px-[13%] bg-white shadow duration-200"
        }
      >
        <div>
          <Link to="/" className="font-signature text-5xl font-black">
            Firdan
          </Link>
        </div>
        <ul className="hidden md:flex gap-5">
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
          <Link to="/">
            <li className="font-bold text-[15px] hover:text-orange-500">
              Project
            </li>
          </Link>
        </ul>
        <div>
          <Link to="/contact">
            <Button1 contactProps="Contact" />
          </Link>
        </div>
        <button onClick={hendleClick} className="md:hidden z-10 ">
          {!nav ? (
            <FaBars className=" bg-orange-500 h-[40px] w-[40px] p-[5px] rounded text-white hover:bg-slate-700" />
          ) : (
            <FaTimes className=" bg-orange-500 h-[40px] w-[40px] p-[5px] rounded text-white hover:bg-slate-700" />
          )}
        </button>
        <div
          className={
            !nav
              ? "hidden"
              : "absolute flex flex-col top-20 left-10 gap-20 shadow-xl w-[85%] rounded-lg p-16 justify-center items-center bg-white"
          }
        >
          <ul className="flex flex-col gap-5">
            <Link to="/">
              <li className="font-bold text-[20px] hover:text-orange-500 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="font-bold text-[20px] hover:text-orange-500 hover:underline">
                About
              </li>
            </Link>
            <Link to="/">
              <li className="font-bold text-[20px] hover:text-orange-500 hover:underline">
                Project
              </li>
            </Link>
          </ul>
          <Link to="/contact">
            <ButtonForMobile contactProps="Contact" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
