import { useState,useMemo } from "react";
import { useCounter } from "../hooks";
const heavyStuff = (iterationsNumbers = 100)=>{
  for(let index = 0; index<iterationsNumbers;index++){
      console.log('Heeere we go!')
  }
  return `${iterationsNumbers} done!`
}
export const MemoHook = () => {
  const { counter, increment } = useCounter(1000);
  const [show, setShow] = useState(true);
  const memorizedValue = useMemo(() => heavyStuff(counter),[counter])
  return (
    <>
      <h1>
        Counter:
        <small>{counter}</small>
      </h1>
      <h4>{memorizedValue}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
      <button
      className="btn btn-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)} </button>
    </>
  );
};
