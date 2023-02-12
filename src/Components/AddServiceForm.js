/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, MenuItem } from "@mui/material";
import useStyle from "../Style/LoginStyle";
import AddCategoryModal from "./AddCategoryModal";

function AddServiceForm() {
  const classes = useStyle();
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8090/inhelp//listCategory").then((resp) => {
      resp.json().then((item) => setData(item));
    });
  }, []);

  const AddServiceHandler = () => {
    const DataInsert = {
      name,
      email,
      phone,
      category,
      description,
    };
    console.log(DataInsert, "data Inserter is here");
    navigate("/login");
  };

  function AddCategoryHandler() {
    console.log("sdfljkdsl");
  }

  return (
    <div className={classes.loginContainer}>
      <div className={classes.container}>
        <p>Sign Up</p>
        <Button onClick={AddCategoryHandler}>Add Category</Button>
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
          id="outlined-select-category"
          select
          label="Category"
          helperText="Please select your category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {data?.map((option) => (
            <MenuItem key={option} value={option}>
              {option.category}
            </MenuItem>
          ))}
        </TextField>
        <br />

        <TextField
          id="outlined-basic"
          label="Description"
          type="text"
          variant="outlined"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <Button variant="contained" onClick={() => AddServiceHandler()}>
          Submit
        </Button>
      </div>
      <AddCategoryModal />
    </div>
  );
}

export default AddServiceForm;
