import React, { useState,useEffect } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });
  const { username, email} = formState;
  const onInputChange = ({target}) =>{
    const {name,value} = target;
    setFormState((formState)=>({...formState,[name]:value}))
  }
  useEffect(() => {
    // console.log("useEffect called")
  },[]);
  useEffect(() => {
    // console.log("email changed")
  },[formState.email]);
  useEffect(() => {
    // console.log("username changed")
  },[formState.username]);
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
    </>
  );

};
