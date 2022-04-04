import React from 'react'
import {Card, Button} from 'react-bootstrap';
export default function ImageTitle({name, adress, latitude, longitude, id}) {
  return (
      <>
    <Card>
        <Card.Img variant="top" src="https://via.placeholder.com/150"/>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </>
  )
}
