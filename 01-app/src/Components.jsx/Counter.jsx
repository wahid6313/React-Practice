import React from "react";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => counterContext.setCount(counterContext.count + 1)}
        className="bg-gray-200 px-3 py-1.5 rounded-lg mt-2 ml-2"
      >
        Increament
      </button>
      <button
        onClick={() => counterContext.setCount(counterContext.count - 1)}
        className=" bg-gray-200 px-3 py-1.5 rounded-lg mt-2 ml-2"
      >
        Decreament
      </button>
    </div>
  );
};

export default Counter;
