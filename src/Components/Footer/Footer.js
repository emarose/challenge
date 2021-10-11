import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../Navigation/logo.png'
import './Footer.css'
import { AiOutlinePhone } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi'
import { IoLocationOutline } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'
import { SiInstagram } from 'react-icons/si'
import { BsTwitter } from 'react-icons/bs'

function Footer() {
  return (
    <>
      <Container fluid className="footerWrapper" >
        <div className="footerContainer">
          <ul>
            <li><IoLocationOutline /> Dirección: Calle Falsa 123</li>
            <li><FiMail  /> Email: automarket@mail.com</li>
            <li><AiOutlinePhone /> Teléfono: +54 0303-456</li>
          </ul>
          <img src={logo} alt="logo" className="footerLogo" />
        </div>
        <div className="footerSocial">
          <li><BsFacebook className="footerIcon" /></li>
          <li><SiInstagram className="footerIcon"/></li>
          <li><BsTwitter className="footerIcon"/></li>
        </div>
        
      </Container>
    </>
  )
}

export default Footer
