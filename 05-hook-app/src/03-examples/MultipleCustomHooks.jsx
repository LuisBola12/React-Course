import React from "react";
import { useCounter } from "./../hooks/useCounter";
import { useFetch } from "./../hooks/useFetch";

export const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/berry/${counter}`
  );
  const { name, item } = !!data && data;
  console.log(data, isLoading, hasError);
  return (
    <>
      <div>Pokemon Berry: {counter}</div>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">Extra Name: {item.name}</p>
          <footer className="blackquote-footer">{name}</footer>
        </blockquote>
      )}
      <button className="btn btn-primary" disabled={isLoading} onClick={()=>increment(1)}>
        Next Berry
      </button>
    </>
  );
};
