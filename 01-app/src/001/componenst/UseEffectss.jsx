import React, { useEffect, useState } from "react";

const Mycomponents = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(19);

  useEffect(() => {
    console.log("wahid ali");
  });

  useEffect(() => {
    console.log("my comp is mount.");
    return function () {
      console.log("inmounting.");
    };
  }, []);

  useEffect(() => {
    console.log("count get updated", count);

    return function () {
      console.log("Unmounting..........", count);
    };
  }, [count]);

  return (
    <div>
      <p>count is: {count}</p>
      <p>count2 is: {count2}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <button onClick={() => setCount2(count2 + 1)}>Count 2</button>
    </div>
  );
};

export default Mycomponents;
