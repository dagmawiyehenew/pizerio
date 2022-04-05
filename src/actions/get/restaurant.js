import axios from 'axios'

const Restaurant = async () =>{
    try {
        
        return await axios.get('https://private-anon-fe71e37dda-pizzaapp.apiary-mock.com/restaurants/').then(res => {
           
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

export default Restaurant;
