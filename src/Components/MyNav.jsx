import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Nav,Navbar,Container} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
function MyNav() {
  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><h2>Vemo Store</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className='nav-link' to="/home">Home</NavLink>
            <NavLink className='nav-link' to="/about">About</NavLink>
            <NavLink className='nav-link' to="/product">Products</NavLink>
            <Nav.Link >count(0)</Nav.Link>
            <NavLink className='nav-link' to="/contactus">Contact Us</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;