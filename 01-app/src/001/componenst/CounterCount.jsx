import React, { useState } from "react";

const CounterCount = () => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <p>Count Components- {count}</p>
      <h3>Number is {count % 2 == 0 ? "even" : "odd"}</h3>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-gray-600 text-white mr-2"
      >
        Increament
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="bg-gray-600 text-white"
      >
        Decreament
      </button>
    </div>
  );
};

export default CounterCount;
