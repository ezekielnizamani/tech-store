import React from 'react'
import { Container,Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
      <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Tech Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/" className="text-white">
                  <i class="fa fa-home mr-1"></i> Home
                </Nav.Link>
                <Nav.Link href="/cart" className="text-white">
                  <i class="fa fa-shopping-cart mr-1"></i>
                  Cart
                </Nav.Link>
                <Nav.Link href="/login" className="text-white">
                  <i class="fa fa-user mr-1"></i>
                  Sign In
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header
