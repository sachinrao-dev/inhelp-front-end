import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import useStyle from "../Style/LoginStyle";
import Controller from "./Controller";

function Login() {
  const navigate = useNavigate();
  const classes = useStyle();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LoginHandler = async () => {
    const data = {
      email,
      password,
    };
    let result = fetch("http://localhost:8090/inhelp/login", {
      method: "Post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await (await result).json();
    if (result.status) {
      navigate("/serviceList");
    } else {
      console.log(result.response);
    }
  };
  return (
    <div className={classes.loginContainer}>
      <Controller />
      <p>Login</p>
      <div className={classes.container}>
        <TextField
          id="outlined-basic"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={() => LoginHandler()}>
          Login
        </Button>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>if you have not register ?</p>
          <Link to="/">signup</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
