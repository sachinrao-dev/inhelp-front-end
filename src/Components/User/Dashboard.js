import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Controller from "../Admin/Controller";
import useStyle from "../Style/LoginStyle";
// import useFetch from "../useFetch";

function Dashboard() {
  const [data, setData] = useState();
  // const uri = "http://localhost:8090/inhelp/client/dashboard";
  // const [deta] = useFetch(uri);
  const [search, setSearch] = useState();
  const classes = useStyle();
  const getServices = () => {
    fetch("http://localhost:8090/inhelp/client/dashboard").then((resp) => {
      resp.json().then((item) => setData(item));
    });
  };
  useEffect(() => {
    getServices();
  }, []);

  const SearchHandler = async () => {
    if (search) {
      let result = await fetch(
        `http://localhost:8090/inhelp/client/search/${search}`,
      );
      result = await result.json();
      if (result) {
        setData(result);
      }
    } else {
      getServices();
    }
  };
  return (
    <div>
      <Controller />
      <div>
        <TextField
          id="filled-search"
          label="Search here"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          variant="filled"
        />
        <Button variant="contained" onClick={() => SearchHandler()}>
          Search
        </Button>
      </div>
      <div className={classes.cardContainer}>
        {data?.map((item) => (
          <Card sx={{ width: "30%", margin: "10px" }}>
            <CardContent>
              <div className={classes.CardContent} style={{ display: "flex" }}>
                <Typography
                  sx={{ fontSize: 14, marginRight: 2 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Name :
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.name}
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <Typography sx={{ mb: 1.5, marginRight: 2 }} color="text.secondary">
                  Email :
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.email}
                </Typography>
              </div>
              <div>
                <Typography variant="body2">
                  Phone :
                </Typography>
                <Typography variant="body2">
                  {item.phone}
                </Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
