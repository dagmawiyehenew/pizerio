import axios from 'axios'

const Order = async (cart, id) =>{
    
    let orderCart = [];
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i].id;
        orderCart.push(
            {
                menuItemId: element,
                quantity: 1
            }
        );
    }   

    const json = {
        cart : orderCart, 
        restuarantId: id
    }

    
    try {
        
        return await axios.post('https://private-anon-fe71e37dda-pizzaapp.apiary-mock.com/orders/', json).then(res => {
           
            return {
                success : true,
                data : res.data
            }
        })

    } catch (error) {
        return {
            success : false,
            errorCode : 'INTERNAL_ERROR',
            message : 'internal server error'
        }
    }
}

export default Order;
