import React, { useContext, useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Mycontext } from "./Context";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(Mycontext);

  const nav = useNavigate();

  // Correct Add Product navigation
  const goToAddProduct = () => {
    nav("/addproduct");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@electronics.com" && password === "admin123") {
      alert("Login Successful!");
      console.log("nn", user);
      nav("/addproduct");   // ✔ Correct navigation
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f5f5f5" }}
    >
      <Row>
        <Col>
          <Card
            style={{
              width: "350px",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            }}
          >
            <h3 className="text-center mb-3">Admin Login</h3>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
