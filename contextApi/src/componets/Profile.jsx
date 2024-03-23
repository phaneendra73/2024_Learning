import React, { useContext } from "react";
import UserContext5 from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext5);

  if (user == null) return <h1>please login</h1>;

  return <h1> Hello welcome {user.username}</h1>;
}

export default Profile;
