import React, { useState } from "react";

function Controller() {
  const [toggle, setToggle] = useState("User");
  return (
    <div>
      <select value={toggle} onChange={(e) => setToggle(e.target.value)}>
        <option>User</option>
        <option>Admin</option>
      </select>
    </div>
  );
}

export default Controller;
