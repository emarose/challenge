import React from 'react'
import './CardPromo.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap' 
import {MdOutlineSell} from 'react-icons/md'

function CardPromo(props) {
  return (
    <>
      <Card style={{ width: '20rem' }} className="cardPromoBox">
        <Card.Img variant="top" src={props.img} className="cardImg"/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="cardText">{props.text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="precioDescuento">{props.precioDescuento} <MdOutlineSell/></ListGroupItem>
          <ListGroupItem className="precioNormal">{props.precioNormal}</ListGroupItem>
        </ListGroup>
        <Card.Body className="cardBodyDetalle">
          <Card.Link href="#">Ver más</Card.Link>
          <Card.Link href="#">Detalle</Card.Link>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardPromo
