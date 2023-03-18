import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Button1, { ButtonForMobile } from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hendleClick = () => setNav(!nav);
  return (
    <div className="absolute z-50">
      <div className="fixed w-full justify-between items-center flex p-2 px-5 bg-transparent">
        <div>
          <h1 className="font-signature text-5xl">Firdan</h1>
        </div>
        <ul className="hidden md:flex gap-5">
          <Link to="/">
            <li className="font-bold text-[15px] hover:text-orange-500">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="font-bold text-[15px] hover:text-orange-500">
              About
            </li>
          </Link>
          <Link to="/">
            <li className="font-bold text-[15px] hover:text-orange-500">
              Service
            </li>
          </Link>
        </ul>
        <div>
          <Button1 contactProps="Contact" />
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
              : "absolute flex flex-col top-20 left-10 gap-20 shadow-xl w-[85%] rounded-lg p-16 justify-center items-center"
          }
        >
          <ul className="flex flex-col gap-5">
            <Link to="/">
              <li className="font-bold text-[20px] hover:text-orange-500">
                Home
              </li>
            </Link>
            <Link to="/">
              <li className="font-bold text-[20px] hover:text-orange-500">
                About
              </li>
            </Link>
            <Link to="/">
              <li className="font-bold text-[20px] hover:text-orange-500">
                Service
              </li>
            </Link>
          </ul>
          <ButtonForMobile contactProps="Contact" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
