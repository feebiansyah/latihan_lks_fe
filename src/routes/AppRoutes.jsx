import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Folmulir from "../pages/Folmulir";

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path="/home"  element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/folmulir" element={<Folmulir />} />
    </Routes>
  );
};

export default AppRoutes;
