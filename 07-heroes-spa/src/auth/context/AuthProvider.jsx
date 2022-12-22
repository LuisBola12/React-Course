import React, { useReducer } from "react";
import { types } from "./../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initLocalStorage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    logged: !!user,
    user: user,
  };
};
export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, initLocalStorage);
  const setLogin = (name = "") => {
    const user = { id: "123", name: name };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };
  const setLogout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };
  return (
    <AuthContext.Provider
      value={{ ...authState, setLogin: setLogin, setLogout: setLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
