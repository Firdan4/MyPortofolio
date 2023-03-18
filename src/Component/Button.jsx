import React from "react";

const Button1 = (props) => {
  return (
    <div>
      <button className="hidden md:flex justify-center items-center w-[120px] h-[40px] bg-orange-500 rounded-md hover:bg-slate-800 duration-200 text-white font-semibold">
        {props.contactProps}
      </button>
    </div>
  );
};

export const ButtonForMobile = (props) => {
  return (
    <div>
      <button className="w-[120px] h-[40px] bg-orange-500 rounded-md hover:bg-slate-800 duration-200 text-white font-semibold">
        {props.contactProps}
      </button>
    </div>
  );
};

export default Button1;
