import React, { useEffect, useState } from "react";

const Timer = () => {
  //   const [time, setTime] = useState(0);

  //   useEffect(() => {
  //     // mounted---
  //     const timer = setInterval(() => setTime(time + 1), 1000);

  //     return function () {
  //       clearInterval(timer);
  //     };
  //   }, [time]);

  const [time, setTime] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h1>STOP WATCH</h1>
      <p>Count is: {time}</p>
    </div>
  );
};

export default Timer;
