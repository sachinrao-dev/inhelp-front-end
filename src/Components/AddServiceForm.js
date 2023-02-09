import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import useStyle from "../Style/LoginStyle";

function AddServiceForm() {
  const classes = useStyle();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();

  const SignUpHandler = () => {
    console.log(name, email, phone, category, description);
    navigate("/login");
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.container}>
        <p>Sign Up</p>
        <TextField
          id="outlined-basic"
          label="Name"
          type="text"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Phone No"
          type="Number"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
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
          label="Category"
          type="text"
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Description"
          type="text"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <Button variant="contained" onClick={() => SignUpHandler()}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddServiceForm;
