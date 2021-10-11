import React from 'react'
import './Header.css'
import { Container, Button } from 'react-bootstrap'

function Header() {
  return (
    <>
      <Container fluid className="headerContainer">
        <div className="headerTitulo">
            <h1>AutoMarket</h1>
            <p>Tu concesionaria de confianza</p>
            <Button href="/contacto" className="btn btn-info headerBtn">Contactame!</Button>
        </div>
      </Container>
    </>
  )
}

export default Header
