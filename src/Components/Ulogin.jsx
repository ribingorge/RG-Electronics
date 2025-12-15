import React, { useContext, useState } from "react";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";

function Ulogin() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { user } = useContext(Mycontext);
  const nav = useNavigate();

  const handleLogin = () => {
    const loggedUser = user.find(
      (item) => item.email === email && item.pass === pass
    );

    if (loggedUser) {
      alert("Login Successful");
      nav("/Userdash");
    } else {
      alert("Login failed! Please try again.");
    }
  };

  return (
    <>
      <Header />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
          padding: "40px 10px",
        }}
      >
        <Card
          className="shadow-lg"
          style={{
            width: "420px",
            borderRadius: "20px",
            padding: "25px",
            background: "white",
          }}
        >
          <h2 className="text-center mb-4 fw-bold" style={{ color: "#333" }}>
            User Login
          </h2>

          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="py-2"
                style={{ borderRadius: "10px" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className="py-2"
                style={{ borderRadius: "10px" }}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              className="w-100 py-2 fw-bold"
              style={{
                borderRadius: "10px",
                fontSize: "18px",
                background: "#2575fc",
                border: "none",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <div className="text-center mt-4">
              <a href="/register" style={{ textDecoration: "none", fontWeight: 500 }}>
                Don’t have an account? <span style={{ color: "#2575fc" }}>Register</span>
              </a>
            </div>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Ulogin;
