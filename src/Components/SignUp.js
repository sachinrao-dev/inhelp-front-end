import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import useStyle from "../Style/LoginStyle";

function SignUp() {
  const navigate = useNavigate();
  const classes = useStyle();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const SignUpHandler = async () => {
    const data = {
      email,
      password,
    };
    try {
      await fetch("http://localhost:8090/inhelp/signup", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => console.log(response));
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
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
        <Button variant="contained" onClick={() => SignUpHandler()}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default SignUp;
