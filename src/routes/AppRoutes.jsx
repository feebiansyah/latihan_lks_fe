import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";




const AppRoutes = () => {
  return (
    <Routes>
       <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default AppRoutes;
