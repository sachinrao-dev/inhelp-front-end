import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import useStyle from "../Style/LoginStyle";

function Login() {
  const navigate = useNavigate();
  const classes = useStyle();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const LoginHandler = () => {
    console.log(email, "Email is here");
    console.log(password, "password is here");
    setEmail("");
    setPassword("");
    navigate("/dashboard");
  };
  return (
    <div className={classes.loginContainer}>
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
      </div>
    </div>
  );
}

export default Login;
