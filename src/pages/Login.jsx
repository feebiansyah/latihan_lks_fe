import React, { useState, useEffect } from "react";
import Label from "../components/elements/Label";
import Input from "../components/elements/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(false);
    try {
      const response = await axios.post(
        "http://192.168.100.10:8000/api/v1/auth/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setSuccessMessage(response.data.message);
      localStorage.setItem("authToken", response.data.user.accessToken);
      setSuccessMessage(response.data.message);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <Label htmlFor="email">Email:</Label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group">
                  <Label htmlFor="password">Password:</Label>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="*****"
                  />
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
