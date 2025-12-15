
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function Header() {
  return (
    <Navbar expand="lg"style={{backgroundColor:"tan"}}>
     
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center me-50" size={100} >
       <h1> RG Electronics</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-900 my-lg-4 gap-3" style={{ maxHeight: '100px' }} navbarScroll>
            <Button variant="dark" href="home">Home</Button>
            <Button variant="dark" href="about">About</Button>

            {/* <Nav.Link href="#">Login</Nav.Link> */}
            <NavDropdown title='Login'>
              <NavDropdown.Item href="ulogin">User Login</NavDropdown.Item>
              <NavDropdown.Item href="admin">Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria label="Search" />
            <Button variant="outLine-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
