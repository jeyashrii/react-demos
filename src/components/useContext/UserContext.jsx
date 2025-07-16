import React, { createContext, useState } from "react";

const userContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "jey" });
  const updateUser = (newName) => {
    setUser({ name: newName });
  };
  return (
    <userContext.Provider value={{ user, updateUser }}>
      {children}
    </userContext.Provider>
  );
};
export { userContext, UserProvider };
