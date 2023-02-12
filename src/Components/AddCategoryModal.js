import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function AddCategoryModal() {
  const [category, setCat] = useState();
  const CategoryHandler = async () => {
    await fetch("http://localhost:8090/inhelp/addCategory", {
      method: "Post",
      body: JSON.stringify(category),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <TextField type="text" onChange={(e) => setCat(e.target.value)} />
      <Button onClick={() => CategoryHandler()}>Add Category</Button>
    </div>
  );
}

export default AddCategoryModal;
