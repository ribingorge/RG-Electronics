import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      {/* Hero Section */}
      <div
        className="text-light text-center d-flex align-items-center justify-content-center"
        style={{ height: "300px", background: "linear-gradient(to right, #001f3f, #00509e)",
        }}
      >
        <div>
          <h1 className="fw-bold display-4">About RG Electronics</h1>
          <p className="mt-3 fs-5">
            Trusted electronics & gadgets for your modern lifestyle.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src="https://i.pinimg.com/736x/ba/c1/6e/bac16e9df93c7eeff7ad9268bbb4ad1c.jpg" alt="Electronics" className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold">Who We Are</h2>
            <p className="mt-3">
              RG Electronics is a leading electronics marketplace offering the
              best quality gadgets, home appliances, and smart devices. Our
              mission is to bring innovation and premium quality technology at
              the best prices.
            </p>
            <ul>
              <li>Premium and latest electronics</li>
              <li>Affordable prices for all customers</li>
              <li>Reliable customer support</li>
              <li>Trusted by thousands of buyers</li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Values Section */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">Our Core Values</h2>
        <Row>
          <Col md={4}>
            <Card className="p-4 shadow border-0 text-center">
              <h4 className="fw-bold">Innovation</h4>
              <p className="mt-2">
                We offer cutting-edge electronics and updated technology.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-4 shadow border-0 text-center">
              <h4 className="fw-bold">Quality</h4>
              <p className="mt-2">
                Every product passes strict quality checks for top performance.
              </p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-4 shadow border-0 text-center">
              <h4 className="fw-bold">Customer Trust</h4>
              <p className="mt-2">
                We ensure safe shopping and reliable after-sales support.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us */}
      <div className="py-5" style={{ backgroundColor: "white" }}>
        <Container>
          <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
          <Row>
            <Col md={3}>
              <Card className="p-3 text-center shadow border-0">
                <h5 className="fw-bold">Trusted Brand</h5>
                <p className="small">Serving customers for years.</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 text-center shadow border-0">
                <h5 className="fw-bold">Best Prices</h5>
                <p className="small">Affordable deals everyday.</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 text-center shadow border-0">
                <h5 className="fw-bold">Fast Delivery</h5>
                <p className="small">Quick and safe shipping.</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="p-3 text-center shadow border-0">
                <h5 className="fw-bold">Support 24/7</h5>
                <p className="small">We are here anytime.</p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact CTA */}
      <div
        className="text-light text-center p-5 mt-4"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        }}
      >
        <h2 className="fw-bold">Need Help or Have Questions?</h2>
        <p>Our team is always ready to assist you.</p>
        <Button variant="light" size="lg">
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default About;
