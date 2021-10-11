import React from 'react'
import CardPromo from '../CardPromo/CardPromo'
import { Container, Row } from 'react-bootstrap'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'
import './Descuentos.css'



function Descuentos() {
  return (
    <> 
      <Container className="descuentosContainer">
       <h3 className="text-center mb-5">Descuentos</h3>
        <Row className="promocionesRow">
          <CardPromo className="cardPromo"
          img={img4}
          title="Renault Kwid 1.0 Sce Zen"
          text="Hatchback | 	Nafta | 66cv"
          precioNormal= "$1.612.600"
          precioDescuento= "$1.000.500"
          />

          <CardPromo className="cardPromo"
          img={img5}
          title="Volkswagen Gol Trend 101"
          text="5 Puertas | Bluetooth - USB | 1.6"
          precioNormal= "$1.599.900"
          precioDescuento= "$1.299.000"
          />

          <CardPromo className="cardPromo"
          img={img6}
          title="Fiat Mobi 1.0 Easy Pack Top"
          text="Potencia: 70 hp | GPS | Frenos ABS"
          precioNormal= "$1.650.000"
          precioDescuento= "$1.060.000"
          />
         </Row>
      </Container>
      
    </>
  )
}

export default Descuentos
