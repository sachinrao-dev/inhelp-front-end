/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import {
  Box, Button, Container, IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyle from "../Style/LoginStyle";

function ServiceList() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const classes = useStyle();
  useEffect(() => {
    fetch("http://localhost:8090/inhelp//serviceList").then((resp) => {
      resp.json().then((item) => setData(item));
    });
  }, []);
  const AddServiceHandler = () => {
    navigate("/addServiceForm");
    console.log("Clicked button");
  };

  const UpdateHandler = (id) => {
    console.log(id, "Update Handler is clicked");
  };

  return (
    <div>
      <Button onClick={() => AddServiceHandler()}>Add Service</Button>
      {data?.map((item) => (
        <Container sx={{ border: "1px solid", margin: "20px" }}>
          <Box
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className={classes.heading}>Services List</div>
            <div className={classes.list}>
              <p>Name :</p>
              <p>{item.name}</p>
            </div>
            <div className={classes.list}>
              <p>phone No :</p>
              <p>{item.phone}</p>
            </div>
            <div className={classes.list}>
              <p>Email:</p>
              <p>{item.email}</p>
            </div>
            <div className={classes.list}>
              <p>Category :</p>
              <p>{item.category}</p>
            </div>
            <div className={classes.list}>
              <p>Description :</p>
              <p>{item.description}</p>
            </div>
            <div className={classes.buttons}>
              <Button onClick={() => UpdateHandler(item._id)}>Update</Button>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </Box>
        </Container>
      ))}

    </div>
  );
}
export default ServiceList;
