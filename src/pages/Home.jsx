import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    
    try {
      const token = localStorage.getItem("authToken");
      if(token){
        await axios.post("http://192.168.100.10:8000/api/v1/auth/logout",
        {},
        {headers: {Authorization: `Bearer ${token}`}}
      );
      }

      localStorage.removeItem("authToken");
     
      navigate("/login");
    } catch (err) {
      console.log(err);
      console.log(err.response.data.message);
    } finally {
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h1 className="text-center ">Home Page</h1>
        <button onClick={handleLogout} className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
