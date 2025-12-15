import React, { useContext } from 'react';
import { Container, Nav, Navbar, Form, Button, Row, Col } from 'react-bootstrap';
import { Mycontext } from './Context';
import { useParams, Link, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="styleproject.css" />

function Productdetails() {
    // App provides the products array under the key `product` in context
    const { product: productData, cart, setCart, like, setLike } = useContext(Mycontext);
    const { id } = useParams();
    const product = productData?.find(p => p.id?.toString() === id) || null;
    console.log(product);
    

    if (!product) {
        return (
            <Container className="mt-4">
                <div className="card p-4 text-center bg-light" style={{ fontFamily: "cursive" }}>
                    <h3>Product not found or still loading...</h3>
                </div>
            </Container>
        );
    }

    function handleLike(prod) {
        if (like.includes(prod)) {
            setLike(like.filter(item => item !== prod))
        }
        else {
            setLike([...like, prod])
        }
    }
    console.log("liked", like);

    function handleCart(prod) {
        if (cart.includes(prod)) {
            setCart(cart.filter(item => item !== prod))
        }
        else {
            setCart([...cart, prod])
        }
    }
    console.log("addtocart", cart)

  return (
    <div>
      <Navbar expand="lg"style={{backgroundColor:"green"}}>
     <Container fluid>
                    <Navbar.Brand href="#" className="d-flex align-items-center me-50" size={100} >
                        <h1> RG Electronics</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-900 my-lg-4" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link onClick={() => Nav('/like')}>Wishlist</Nav.Link>
                            <Nav.Link onClick={() => Nav('/cart')}>Cart</Nav.Link>
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control type="Search" placeholder="Search" className="me-2" aria label="Search" onChange={handleSearch} value={searchQuery}/>
                            <Button variant="outLine-success" >Search</Button> 
                            <input type='' onChange={handleSearch} value={searchQuery} placeholder='Search '></input>

                        </Form> */}
                    </Navbar.Collapse>
                </Container>
          </Navbar>   
          
          <Container className="mt-4">
              <div className="card p-4 text-center bg-light" style={{ fontFamily: "cursive" }}>
                  
                  <Row>
                      <Col>
                          <h2 style={{ marginLeft: "60% " }} >{product.productname || product.pname}</h2>
                      </Col>
                      <Col md={4}>
                          <button style={{ width: "20%", fontSize: "44px", marginTop: "9px", alignItems: "center", marginLeft: "44%", backgroundColor: "white", border: "none" }} onClick={() =>handleLike(product)}
                              title={like.includes(product) ? "Liked" : "Unliked"}>
                              {
                                  like.includes(product) ? "❤️" : "🤍"
                              }
                          </button>
                      </Col>
                  </Row>
                  <Row className="align-items-center" style={{ marginTop: "2%" }}>
                      <Col md={6} className="text-center">
                          <img src={product.image || product.coverImage} alt="product" className="img-fluid" style={{ width: "200px", height: "300px" }} />
                      </Col>

                      <Col md={6}>
                          <div style={{ marginLeft: "-180px", fontFamily: "cursive", color: "gray", minHeight: "300px", display: "flex", alignItems: "center", justifyContext: "left" }}>
                              <h4>{product.description}</h4>
                          </div>
                      </Col>
                  </Row>
                  <h4 className="mt-3">Product: {product.productname || product.productname}</h4>
                  <h3>Price $: {product.price || product.price}</h3>
                  <Row className="align-items-center">
                      <Col md={6}>
                         <Button style={{ margin: "4px", height: "30px", width: "150px", backgroundColor: "black",boxShadow: "1px 2px 1px gray", color: "white", border: "none" }} onClick={() => handleCart(product)}>
                                        {
                                            cart.includes(product) ? "Added" : "Add to cart🛒"
                              }
                              </Button>
                      </Col>
                      <Col md={6}>

                          <Button className="color-black" style={{ width: "26%", backgroundColor: 'gray', border: 'none', marginLeft: "-53%", backgroundColor: "black",boxShadow:"1px 2px 1px gray"}} onMouseEnter={(e)=>(e.currentTarget.opacity="0.8")}>
                            <Link to={'/payment'} state={{price:product.price*1}} style={{textDecoration: "none",opacity:"2s blues",color:'white'}}>
                            { }
                            Buy Now
                            </Link>
                            </Button>
                            </Col>     
                  </Row>
              </div>
          </Container>
      </div>
    
  );
}

export default Productdetails;
