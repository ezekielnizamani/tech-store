import React from 'react'
import {LinkContainer} from "react-router-bootstrap"
import { Container,Navbar, Nav } from "react-bootstrap";

const Header = () => {
    return (
      <header>
        <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Tech Store</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/">
                  <Nav.Link className="text-white">
                    <i className="fa fa-home mr-1"></i> Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cart">
                  <Nav.Link href="/cart" className="text-white">
                    <i className="fa fa-shopping-cart mr-1"></i>
                    Cart
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/login">
                  <Nav.Link className="text-white">
                    <i className="fa fa-user mr-1"></i>
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
}

export default Header
