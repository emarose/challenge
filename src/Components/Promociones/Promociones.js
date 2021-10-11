import React from 'react'
import CardPromo from '../CardPromo/CardPromo'
import { Container, Row } from 'react-bootstrap'
import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import './Promociones.css'



function Promociones() {
  return (
    <> 
      <Container className="promocionesContainer">
       <h3 className="text-center">Promociones</h3>
        <Row className="promocionesRow">
          <CardPromo className="cardPromo"
          img={img1}
          title="Volkswagen Amarok Trend"
          text="Potencia: 140 hp | 	Diésel | 4 Puertas"
          precioNormal= "$4.315.500"
          precioDescuento= "$3.900.500"
          />

          <CardPromo className="cardPromo"
          img={img2}
          title="Chevrolet Spin 1.8L"
          text="Frenos ABS | Bluetooth - USB | 5 Puertas"
          precioNormal= "$2.599.900"
          precioDescuento= "$2.399.900"
          />

          <CardPromo className="cardPromo"
          img={img3}
          title="Fiat Toro 1.8 Freedom"
          text="Automática | Pick-Up | Frenos ABS"
          precioNormal= "$4.360.000"
          precioDescuento= "$4.060.000"
          />

         </Row>
         <a href="/promocionesydescuentos">Conocé más</a>
      </Container>
      
    </>
  )
}

export default Promociones
