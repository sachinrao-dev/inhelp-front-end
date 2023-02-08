import React from "react";
import { TextField, Button } from "@mui/material";

function Login() {
  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
      <div style={{ margin: "100px auto" }} className="LoginContainer">
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
}

export default Login;
