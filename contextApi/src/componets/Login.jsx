import React, { useContext, useState } from "react";
import UserContext5 from "../context/UserContext";

function Login() {
  const [username, setusername] = useState("admin");
  const [password, setpassword] = useState("password");
  const { setuser } = useContext(UserContext5);
  const handlesubmit = (e) => {
    e.preventDefault();
    setuser({ username, password });
  };
  return (
    <>
      <div>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <button onClick={handlesubmit}>submit</button>
      </div>
    </>
  );
}

export default Login;
