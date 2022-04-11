import React from 'react'
import { Card } from 'react-bootstrap'
export default function Panel({title, subtitle, discription, actions}) {
  return (
        <Card className='mb-3'>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
            <Card.Text>{discription}</Card.Text>
            <Card.Link onClick={actions}>Add to cart</Card.Link>
        </Card.Body>
        </Card>
  )
}
