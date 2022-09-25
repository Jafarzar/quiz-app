import React, { useState } from "react";

import { useAuth } from "../../Store/AuthContext";
import classes from "./Login.module.css";

const Login = (props) => {
  const { userName, setUserName, onLogin } = useAuth();

  return (
    <form
      onSubmit={() => {
        onLogin(userName);
      }}
      className={classes.login}
    >
      <h2 className={classes.text}>Welcome</h2>
      <div>
        <input
          required
          placeholder="Name"
          value={userName}
          onChange={(event) => setUserName(event.currentTarget.value)}
        />
      </div>
      <button type="submit">LOGIN</button>
    </form>
  );
};

export default Login;
