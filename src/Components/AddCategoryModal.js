import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function AddCategoryModal() {
  const [cat, setCat] = useState();
  const CategoryHandler = () => {
    console.log(cat, "category");
  };

  return (
    <div>
      <TextField type="text" onChange={(e) => setCat(e.target.value)} />
      <Button onClick={() => CategoryHandler()}>Add Category</Button>
    </div>
  );
}

export default AddCategoryModal;
