/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import PropTypes from "prop-types";
import useStyle from "../Style/LoginStyle";

function UpdateModal(props) {
  const { item, setModal } = props;
  const classes = useStyle();
  const [name, setName] = useState(item.name || "");
  const [email, setEmail] = useState(item.email || "");
  const [phone, setPhone] = useState(item.phone || "");
  const [category, setCategory] = useState(item.category || "");
  const [description, setDescription] = useState(item.description || "");
  const [data, setData] = useState();

  const CategoryHandler = () => {
    fetch("http://localhost:8090/inhelp/listCategory").then((resp) => {
      resp.json().then((items) => setData(items));
    });
  };

  useEffect(() => {
    CategoryHandler();
  }, []);

  const UpdateData = async () => {
    const dataUpdated = {
      name,
      email,
      phone,
      category,
      description,
    };
    await fetch(`http://localhost:8090/inhelp/updateService/${item._id}`, {
      method: "Put",
      body: JSON.stringify(dataUpdated),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setModal(false);
    // getServices();
  };

  return (
    <div className={classes.loginContainer}>
      <div className={classes.container}>
        <p>Add service form</p>
        <TextField
          id="outlined-basic-name"
          label="Name"
          type="text"
          value={name}
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic-number"
          label="Phone No"
          value={phone}
          type="Number"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id="outlined-basic-email"
          label="Email"
          type="email"
          value={email}
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-select-category"
          select
          label="Category"
          value={category}
          helperText="Please select your category"
          onChange={(e) => setCategory(e.target.value)}
        >
          {data?.map((option) => (
            <MenuItem key={option._id} value={option.category}>
              {option.category}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-basic-description"
          label="Description"
          type="text"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" onClick={() => UpdateData()}>
          Update
        </Button>
      </div>
    </div>
  );
}

UpdateModal.propTypes = {
  item: PropTypes.string.isRequired,
  setModal: PropTypes.bool.isRequired,
};

export default UpdateModal;
