import React, {useState} from 'react'
import {ListGroup, Col, Badge, Button} from 'react-bootstrap'
import Order from '../../actions/post/order';
export default function Cart(props) {
 
  const {cart, sum, actions, id} = props;
  const [isLoading, setLoading] = useState(false);
  const [orderresit, setOrderresit] = useState();
  const handelOrder = () => {
    setLoading(true);
    Order(cart, id).then((res) => {
      if(res.success){
          setOrderresit(res.data)
      }
    })
    setLoading(false)
 }

  return (
    <Col>
      {!orderresit ? 
       <ListGroup as="ol" numbered>
       {
        cart && cart.length ? 
            
            <>
           { cart.map((item, index) => {
                       return <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            key={index} >
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.name}</div>
                            {item['topping'].slice(',').join(' | ')}
                            </div>
                            <Badge bg="transparent" className='text-dark fw-bold fs-5' pill>
                            {item.price} <i className="fas fa-trash-alt text-red" onClick={() => actions(item)}></i>
                            </Badge>
                        </ListGroup.Item>
                    }
            )
                
        } 
            <Button type='button' defaultValue={sum} onClick={() => handelOrder()}>{isLoading ? 'Loading…' : `Order ${sum}`}</Button>
        </>
        :
        <>  
        {<div className='text-center'> 
                <h2>DIN VARUKOG ÄR TOM </h2>
                <p>Vi inbjuder dig att bekanta dig med ett sortiment av vår butik. Visst kan du hitta något för dig själv!</p>
            </div>} 
            </>
       }
        </ListGroup>

       : <p>{orderresit.orderId} {orderresit.status} {orderresit.totalPrice} {orderresit.orderedAt} {orderresit.esitmatedDelivery}    </p>
      }
    </Col>
  )
}
