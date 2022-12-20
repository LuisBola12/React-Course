import React, { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();
    const setRefOnClick = () => {
        inputRef.current.select();
    }
    return (
    <>
      <h1>Focus Screen</h1>
      <hr></hr>
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese un nombre"
        className="form-control"
      ></input>
      <button className="btn btn-primary mt-2" onClick={setRefOnClick}>Set Focus</button>

    </>

  );
};
