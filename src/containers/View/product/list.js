import React, {useState} from 'react'
import Panel from '../../../components/cards/_panel';
import Cart from '../cart';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
export default function ProductList({...props}) {
  const {products, restaurant} = props;

  const [cart, setCart] = useState([]);
  const itemSum = cart.reduce((sum, { price = 0 }) => sum + price, 0);


  const addToCart = (slize) =>{
    setCart([...cart, slize]);
  }
  
  const removeItem = (item) =>{

        let currentCart = [...cart];
        currentCart = currentCart.filter((cart) => cart.id !== item.id)
        setCart(currentCart);
  
  }

  return (
    <>

      <MDBRow>
        <MDBCol size='md-8' >
            {products ? 
                products.Pizza.map((slize, index) => {
                    return   <Panel 
                                key={index}
                                title={slize.name}
                                subtitle={slize.price}
                                description={slize['topping'].slice(',').join(' | ')}
                                actions={() => addToCart(slize)}
                            />
                })

                : 'No food for you ... '
            }
        </MDBCol>
        <MDBCol size='md-4' >
              <Cart 
                    cart={cart}
                    sum={itemSum}
                    actions={removeItem}
                    id={restaurant}
                />
        </MDBCol>
      </MDBRow>

    </>
       
    )
}
