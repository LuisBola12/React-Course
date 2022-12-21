import { React, useState } from "react";
import { UserContext } from "./UserContext";

const initValue = {
  email: "luis@gmail.com",
  id: 12,
  name: "Luis Alberto Bolanos",
};
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initValue);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
