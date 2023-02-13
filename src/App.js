import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import AddServiceForm from "./Components/AddServiceForm";
import SignUp from "./Components/SignUp";
import ServiceList from "./Components/ServiceList";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/addServiceForm" element={<AddServiceForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/serviceList" element={<ServiceList />} />
      </Routes>
    </div>
  );
}

export default App;
