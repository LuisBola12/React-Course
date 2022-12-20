import React from "react";
import { Blackquote,Loading} from "../Components/";
import { useCounter,useFetch } from "./../hooks/index.js";

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/berry/${counter}`
  );
  const { name, item } = !!data && data;
  return (
    <>
      <div>Pokemon Berry: {counter}</div>
      <hr />
      {isLoading ? 
        <Loading/> : 
        <Blackquote message={"Berry Name"} quote={name} author={item}/>
      }
      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment(1)}>
        Next Berry
      </button>
    </>
  );
};