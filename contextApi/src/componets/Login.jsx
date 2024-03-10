import React, { useState } from "react";

function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();

  const handlesubmit = () => {};
  return (
    <>
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="Password"></input>
        <button onClick={handlesubmit}></button>
      </div>
    </>
  );
}

export default Login;
