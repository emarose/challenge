import React from 'react'
import "./Slideshow.css"
import { Container, Carousel } from 'react-bootstrap'
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'

function Slideshow() {
  return (
    <>
      <Container className="my-5 text-center" >
        <Carousel variant="dark" fade>

          <Carousel.Item className="carouselItem">
            <img className="carouselImg" src={img1} alt="img1" />
            <Carousel.Caption className="carouselCaption">
              <h3>Servicio Personalizado</h3>
              <p>Te asesoramos en todo momento.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carouselItem">
            <img className="carouselImg" src={img2} alt="img2" />
            <Carousel.Caption className="carouselCaption">
              <h3>Todos los modelos</h3>
              <p>Encontrá el auto de tus sueños.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carouselItem">
            <img className="carouselImg" src={img3} alt="img3" />
            <Carousel.Caption className="carouselCaption">
              <h3>15 Años de experiencia</h3>
              <p>Somos una institución avalada por nuestros clientes.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </Container>
    </>
  )
}

export default Slideshow
