import { React, useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr></hr>
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser({ id: 123, email: "luis@gamil.com", name: "Luis Bolanos" });
        }}
      >Set New User</button>
      <pre>{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
