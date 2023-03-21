import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import "../index.css";

const Button1 = (props) => {
  return (
    <div>
      <button className="hidden md:flex justify-center items-center w-[120px] h-[40px] bg-orange-500 rounded-md hover:bg-slate-800 duration-200 text-white font-semibold">
        {props.contactProps}
      </button>
    </div>
  );
};

export const Button2 = (props) => {
  return (
    <div>
      <button className="addChatFa flex hover:gap-2 justify-center items-center w-[120px] h-[40px] border border-orange-500 text-gray-900 rounded-md hover:border-none hover:bg-slate-800 duration-200 hover:text-white font-semibold">
        {props.contactProps}
        <FaRegCommentDots className="ChatFa" />
      </button>
    </div>
  );
};

export const ButtonForMobile = (props) => {
  return (
    <div>
      <button className="z-50 w-[120px] h-[40px] bg-orange-500 rounded-md hover:bg-slate-800 duration-200 text-white font-semibold">
        {props.contactProps}
      </button>
    </div>
  );
};

export default Button1;
