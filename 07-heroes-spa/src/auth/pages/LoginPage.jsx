import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath") || "/";
  const onLogin = () => {
    setLogin("Luis Bolanos");
    navigate(lastPath, { replace: true });
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
