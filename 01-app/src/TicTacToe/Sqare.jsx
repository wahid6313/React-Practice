import React from "react";

const Sqare = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="border h-25 w-25 flex items-center justify-center cursor-pointer"
    >
      <h1 className="font-bold text-2xl">{props.value}</h1>
    </div>
  );
};

export default Sqare;
