import React from 'react'
import Examplecarousel from './Examplecarousel'
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap'
import { Mycontext } from './Context'
import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, useNavigate } from 'react-router-dom'
function Userdash() {
    const { product, like, setLike, cart, setCart } = useContext(Mycontext)
    const [searchQuery, setsearchQuery] = React.useState()
    const [filteredData, setFilteredData] = React.useState(product)
    const nav = useNavigate()

    console.log(product);

    function handleLike(prod) {
        if (like.includes(prod)) {
            setLike(like.filter(item => item !== prod))
        }
        else {
            setLike([...like, prod])
        }
    }
    console.log("liked", like);

    function handleAddtocart(prod) {
        if (cart.includes(prod)) {
            setCart(cart.filter(item => item !== prod))
        }
        else {
            setCart([...cart, prod])
        }
    }
    console.log("addtocart", cart)

    function handleSearch(Prod) {
        const query = Prod.target.value
        const filtered = product.filter(Pdt => Pdt.productname.toLowerCase().includes(query.toLowerCase()) || Pdt.category.toLowerCase().includes(query.toLowerCase()) || Pdt.price.toString().includes(query))
        setFilteredData(filtered)
    }
    console.log("filter", filteredData);
 


    return (
        <div>
            <Navbar expand="lg" style={{ backgroundColor: "green" }}>
                <Container fluid>
                    <Navbar.Brand href="#" className="d-flex align-items-center me-50" size={100} >
                        <h1> RG Electronics</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-900 my-lg-4" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link onClick={() => nav('/like')}>Wishlist</Nav.Link>
                            <Nav.Link onClick={() => nav('/cart')}>Cart</Nav.Link>
                            
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" aria label="Search" onChange={handleSearch} value={searchQuery} />
                            {/* <Button variant="outLine-success" >Search</Button> */}
                            {/* <input type='' onChange={handleSearch} value={searchQuery} placeholder='Search '></input> */}

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Examplecarousel />

            <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "63px", gap: "15px", marginTop: "20px" }}>
                {
                    filteredData.map((pdt, id) =>
                        <Link
                            to={`/productdetails/${pdt.id}`}
                            key={id}
                            style={{ textDecoration: "none", color: "inherit" }} >

                            <div className='prdpro' style={{
                                marginLeft: "10px", width: "100%", backgroundColor: "lightGray", borderRadius: "4px", padding: "12px",
                                transition: "all 2s ease-in-out", justifyItems: "center", position: "relative"
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"} onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                            >
                                <div style={{ border: "1px solid black", borderRadius: "5px", padding: "10px", marginLeft: "10px", textAlign: 'center' }}>
                                    {pdt.productname} <br />
                                    <img src={pdt.image} alt="" style={{ width: "200px", height: "220px" }} /><br></br>
                                    <b> {pdt.category}  </b> <br />
                                    {pdt.price} <br />
                                    {pdt.Quantity} <br />

                                    <button onClick={(e) => { e.preventDefault(); handleLike(pdt) }} style={{ width: "100px", height: "30px", backgroundColor: "green", color: "white", borderRadius: "5px" }}>
                                        {
                                            like.includes(pdt) ? "Unlike👎" : "Like👍"
                                        }
                                    </button>
                                    <button onClick={(e) => { e.preventDefault(); handleAddtocart(pdt) }} style={{ margin: "4px", height: "30px", width: "150px", backgroundColor: "green", color: "white", borderRadius: "5px" }}>
                                        {
                                            cart.includes(pdt) ? "Added" : "Add to cart🛒"
                                        }
                                    </button>
                                </div>
                            </div>
                        </Link>
                    
                    )}
            </div>
        </div>
    )
}
export default Userdash
