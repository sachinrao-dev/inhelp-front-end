import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Admin/Login";
import AddServiceForm from "./Components/Admin/AddServiceForm";
import SignUp from "./Components/Admin/SignUp";
import ServiceList from "./Components/Admin/ServiceList";
import Dashboard from "./Components/User/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addServiceForm" element={<AddServiceForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/serviceList" element={<ServiceList />} />
      </Routes>
    </div>
  );
}

export default App;
