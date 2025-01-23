import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/layouts/NavBar";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Token biasanya disimpan di localStorage
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  
  return (
    <>
      <Router>
        {isAuthenticated && <NavBar />}
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
