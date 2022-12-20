import React, { useState, useCallback, useEffect } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
  const [counter, setCounter] = useState(10);
  const increment = useCallback(
    (value = 1 ) => {
        setCounter((counter)=>counter + value);
    },
    [],
  );
  
  return (
    <>
      <h1>useCallBackHook: {counter}</h1>
      <hr></hr>
      <ShowIncrement increment={increment}/>
    </>
  );
};
