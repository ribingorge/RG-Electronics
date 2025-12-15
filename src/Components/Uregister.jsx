import React, { useContext, useState } from 'react';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mycontext } from './Context';
import { useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

function Uregister() {
  const nav = useNavigate();
  const { user, setUser } = useContext(Mycontext);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function alreadyRegistered() {
    return user.find(item => item.email === email);
  }

  function handleRegister() {
    if (!fname || !lname || !email || !pass) {
      alert("All fields are required");
      return;
    }

    if (!alreadyRegistered()) {
      const userdata = { fname, lname, email, pass };
      setUser([...user, userdata]);
      alert("Registered Successfully");
      nav("/ulogin");
    } else {
      alert("Email already registered!");
    }
  }

  return (
    <div 
      style={{
        background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        minHeight: "100vh",
        paddingTop: "40px"
      }}
    >
      <Header />

      <div className="d-flex justify-content-center align-items-center mt-4">
        <Card 
          style={{
            width: "400px",
            padding: "30px",
            borderRadius: "18px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            color: "white",
            boxShadow: "0 4px 25px rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.15)"
          }}
        >

          <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>Create Account</h2>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  color: "white"
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  color: "white"
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontWeight: "500" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  color: "white"
                }}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label style={{ fontWeight: "500" }}>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid #555",
                  color: "white"
                }}
              />
            </Form.Group>

            <Button
              onClick={handleRegister}
              style={{ width: "100%", padding: "10px", fontWeigh: "bold",  background: "white", color: "black", borderRadius: "8px", border: "none", transition: "0.3s" }}
              onMouseEnter={(e) => { e.target.style.background = "#f0f0f0";}}
              onMouseLeave={(e) => { e.target.style.background = "white";  }}
            >
              Register
            </Button>

          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Uregister;
