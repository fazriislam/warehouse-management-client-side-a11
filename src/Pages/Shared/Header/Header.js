import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Bunch of Goods</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/inventory">Manage Inventory</Nav.Link>
      <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
      <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;