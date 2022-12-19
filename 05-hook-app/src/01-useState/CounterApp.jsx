import { React, useState } from "react";
export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });
  return (
    <>
      <div>Counter1: {counter.counter1}</div>
      <div>Counter2: {counter.counter2}</div>
      <div>Counter3: {counter.counter3}</div>
      <hr></hr>
      <button
        className="btn"
        onClick={() =>
          setCounter((counter) => ({
            ...counter,
            counter1: counter.counter1 + 1,
          }))
        }
      >
        +1
      </button>
    </>
  );
};
