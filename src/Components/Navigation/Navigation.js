import React from 'react'
import {Container, Navbar, Nav } from 'react-bootstrap'
import logo from './logo.png'
import './Navigation.css'

function Navigation() {
  return (
    <> 
      <Navbar collapseOnSelect fixed="top"  expand="md" bg="dark" variant="dark">
        <Container className="navigationContainer">
        <Navbar.Brand href="/" className="navbarBrand">
            <img src={logo} alt="logo"
                // width="180"
                // height="180"
                className="d-inline-block navbarLogo"
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/promocionesydescuentos">Promociones</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation

