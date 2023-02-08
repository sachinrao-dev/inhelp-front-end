import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
