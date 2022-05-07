import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
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
            {
              user ?
                <>
                <Button onClick={handleSignOut} variant="primary" type="submit">Sign Out</Button>
                </>
                :
              <><Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;