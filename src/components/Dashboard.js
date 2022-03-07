import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { axiosInstance } from "../request";

function Dashboard() {
  let navigate = useNavigate();
  // let name = sessionStorage.getItem("FirstName");

  useEffect(() => {
    checkAuth();
  });
  let logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  let checkAuth = async () => {
    let token = sessionStorage.getItem("token");
    if (token) {
      let config = {
        Headers: {
          token: token,
        },
      };
      console.log("token", config);
      let res = await axiosInstance.post("/users/auth");
      if (res.data.statuscode !== 200) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>YOU ARE AUTHENTICATED</h1>

      <button onClick={() => checkAuth()}>Test Auth </button>
      <button onClick={() => logout()}> logout </button>
    </div>
  );
}

export default Dashboard;
