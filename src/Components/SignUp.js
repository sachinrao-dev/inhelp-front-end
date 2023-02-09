import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    let result = await fetch("http://localhost:8090/inhelp/signup", {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await (await result).json();
    if (result) {
      navigate("/login");
      console.log(result);
    } else {
      console.log(result);
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
        <div
          style={{ display: "flex", alignItems: "center" }}
        >
          <p>Already have an account ?  </p>
          <Link to="/login">login</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
