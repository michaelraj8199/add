import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { axiosInstance } from "../request";
import { useNavigate } from "react-router-dom";

// import { Fade } from "react-bootstrap";

function Login() {
  let navigate = useNavigate();

  let [email, setEmail] = useState("");

  let [password, setPassword] = useState("");

  let role = 2;
  let [passwordMatch, setMatch] = useState("");

  let handleSubmit = async () => {
    console.log(email, password);
    let res = await axiosInstance.post("/users/login", {
      email,
      password,
      role,
    });
    console.log(res);

    if (res.data.statuscode === 200) {
      sessionStorage.setItem("token", res.data.token);
      // sessionStorage.setItem("Firstname", res.data.FisrtName);
      // console.log(res);
      navigate("/dashboard");
    }
  };
  return (
    <div className="wrapper">
      <h2 style={{ textAlign: "center", paddingTop: "5px" }}>
        Login to Have Access{" "}
      </h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            we'll never share your email with anyone else
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <div style={{ textAlign: "center" }}>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
            }}
          >
            Signup
          </Button>
          {passwordMatch ? (
            <div style={{ color: "red" }}>password should match!</div>
          ) : (
            <></>
          )}
        </div>
      </Form>
    </div>
  );
}

export default Login;
