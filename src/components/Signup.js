import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import { First } from "react-bootstrap/esm/PageItem";
import { axiosInstance } from "../request";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate = useNavigate();
  let [firstName, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let role = 2;
  let [passwordMatch, setMatch] = useState("");
  console.log(firstName);

  useEffect(() => {
    if (password === confirmPassword) {
      console.log("if", password, confirmPassword);
      setMatch(false);
    } else {
      console.log("else", password, confirmPassword);
      setMatch(true);
    }
  });
  let handleSubmit = async () => {
    console.log({
      firstName,
      lastname,
      email,
      mobile,
      password,
      role,
    });

    let res = await axiosInstance.post("/users/register", {
      firstName,
      lastname,
      email,
      mobile,
      password,
      role,
    });
    console.log(res);

    if (res.data.statuscode == 200) {
      navigate("/login");
    }
  };
  return (
    <div className="wrapper">
      <h2 style={{ textAlign: "center", paddingTop: "5px" }}>Sighup Page </h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="Fisrtname"
            placeholder="FirstName"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="lastName"
            placeholder="LastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            type="Mobile"
            placeholder="Mobile"
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />
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
        <Form.Group className="mb-3">
          <Form.Label>ConfromPassword</Form.Label>
          <Form.Control
            type="password"
            placeholder="ConfromPassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
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

export default Signup;
