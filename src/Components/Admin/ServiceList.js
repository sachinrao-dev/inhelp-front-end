/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import {
  Box, Button, Container, IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import useStyle from "../Style/LoginStyle";
import UpdateModal from "./UpdateModal";
import useFetch from "../useFetch";

function ServiceList() {
  const uri = "http://localhost:8090/inhelp/serviceList";
  const [Data] = useFetch(uri);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [Id, setId] = useState();
  const classes = useStyle();
  const AddServiceHandler = () => {
    navigate("/addServiceForm");
  };

  const DeleteHandler = async (id) => {
    await fetch(`http://localhost:8090/inhelp/deleteService/${id}`, {
      method: "Delete",
    });
  };

  const UpdateHandler = (item) => {
    setId(item);
    setModal(true);
  };

  return (
    <div>
      <Button onClick={() => AddServiceHandler()}>Add Service</Button>
      <div className={classes.heading}>Services List</div>
      {Data?.map((item) => (
        <Container sx={{ border: "1px solid", margin: "20px" }}>
          <Box
            key={item._id}
            sx={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
              <Button onClick={() => UpdateHandler(item)}>Update</Button>
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => DeleteHandler(item._id)}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </div>
          </Box>
        </Container>
      ))}
      {modal && <UpdateModal item={Id} setModal={setModal} />}
    </div>
  );
}
export default ServiceList;
