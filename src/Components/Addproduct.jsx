import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Mycontext } from "./Context";

function Addproduct() {
  const { product, setProduct } = useContext(Mycontext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      category,
      price: Number(price),
      quantity: Number(quantity),
      image: imageURL,
      description,
    };

    setProduct([...product, newProduct]);
    alert("Product added successfully!");

    setName("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setImageURL("");
    setDescription("");
  };

  return (
    <Container fluid className="py-5 bg-light">
      <Row>
        {/* ADD PRODUCT FORM */}
        <Col md={4}>
          <Card className="shadow p-4 rounded sticky-top" style={{ top: "20px" }}>
            <h4 className="text-center mb-4">Add Product</h4>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="₹ Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Qty"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Image URL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Product description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="dark" type="submit" className="w-100">
                Add Product
              </Button>
            </Form>
          </Card>
        </Col>

        {/* PRODUCT LIST */}
        <Col md={8}>
          <h4 className="mb-4">Product List</h4>

          <Row className="g-4">
            {product.length === 0 && (
              <p className="text-muted text-center">
                No products added yet
              </p>
            )}

            {product.map((item, index) => (
              <Col md={4} key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={item.image || "https://via.placeholder.com/300"}
                    style={{ height: "180px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="fs-6">
                      {item.name}
                    </Card.Title>
                    <Card.Text>
                      <strong>₹{item.price}</strong> <br />
                      Qty: {item.quantity} <br />
                      <small className="text-muted">
                        {item.category}
                      </small>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Addproduct;
