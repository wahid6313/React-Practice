import React from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";
import CounterCount from "./CounterCount";
import Mycomponents from "./useEffectss";
import Timer from "./Timer";

const Header = () => {
  return (
    <div className="w-[300px] p-10 rounded-xl bg-white">
      <CounterCount />
      <Timer />
      {/* <Mycomponents /> */}
      {/* <h1 className="text-xl font-bold py-5">TODO</h1>
      <TodoItem text="Eat" />
      <TodoItem completed={false} text="Apple" />
      <TodoItem text="Banana" />
      <TodoItem text="Guava" />

      <Button /> */}
    </div>
  );
};

export default Header;
