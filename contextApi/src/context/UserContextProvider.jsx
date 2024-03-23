import React, { useState } from "react";
import UserContext5 from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  return (
    <UserContext5.Provider value={{ user, setuser }}>
      {children}
    </UserContext5.Provider>
  );
};

export default UserContextProvider;
