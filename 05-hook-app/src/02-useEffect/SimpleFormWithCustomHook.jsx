import React, { useEffect, useState } from "react";
import { useForm } from "./../hooks/useForm";

export const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, resetFormState} = useForm({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = formState;
  useEffect(() => {
    // console.log("useEffect called")
  }, []);
  useEffect(() => {
    // console.log("email changed")
  }, [formState.email]);
  useEffect(() => {
    // console.log("username changed")
  }, [formState.username]);
  return (
    <>
      <h1>Simple Form</h1>
      <hr></hr>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      ></input>
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      ></input>

      <button className="btn btn-primaru mt-2" onClick={resetFormState}>Reset</button>
    </>
  );
};
