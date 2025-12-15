import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>

      {/* ---------------- Hero Section ---------------- */}
      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          color: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <h1 className="fw-bold display-4">Latest Electronics for You</h1>
          <p className="lead">
            Shop the newest gadgets, premium accessories & smart electronics.
          </p>
          <Button variant="light" size="lg">
            Shop Now
          </Button>
        </Container>
      </div>

      {/* ---------------- Categories Section ---------------- */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Shop by Categories</h2>
        <Row className="g-4">

          <Col md={4}>
            <Card className="shadow">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
              />
              <Card.Body className="text-center">
                <Card.Title>Smartphones</Card.Title>
                <Button variant="dark">View More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              />
              <Card.Body className="text-center">
                <Card.Title>Laptops</Card.Title>
                <Button variant="dark">View More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow">
              <Card.Img 
                variant="top" 
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
              />
              <Card.Body className="text-center">
                <Card.Title>Headphones</Card.Title>
                <Button variant="dark">View More</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* ---------------- Featured Products ---------------- */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">Featured Products</h2>
        <Row className="g-4">

          {[1, 2, 3, 4].map((item) => (
            <Col md={3} key={item}>
              <Card className="shadow h-100">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                />
                <Card.Body className="text-center">
                  <Card.Title>Smart Gadget</Card.Title>
                  <Card.Text>High-performance device with latest features.</Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}

        </Row>
      </Container>

      {/* ---------------- CTA Banner ---------------- */}
      <div
        style={{
          background: "#111",
          color: "white",
          padding: "70px 0",
          textAlign: "center",
        }}
      >
        <h2 className="fw-bold">Get the Best Deals Today!</h2>
        <p>Save up to 40% on selected electronics.</p>
        <Button variant="light" size="lg">Explore Offers</Button>
      </div>

      {/* ---------------- Testimonials ---------------- */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
        <Row className="g-4">

          <Col md={4}>
            <Card className="p-3 shadow">
              <Card.Text>"Amazing service and high-quality products!"</Card.Text>
              <h6 className="fw-bold">– Alex</h6>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 shadow">
              <Card.Text>"I love the fast delivery and latest gadgets."</Card.Text>
              <h6 className="fw-bold">– Priya</h6>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="p-3 shadow">
              <Card.Text>"Very affordable and excellent support."</Card.Text>
              <h6 className="fw-bold">– John</h6>
            </Card>
          </Col>

        </Row>
      </Container>

    </div>
  );
}

export default Home;
