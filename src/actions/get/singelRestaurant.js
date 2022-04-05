import axios from 'axios'

const SingelRestaurant = async ({id}) =>{
   
    try {
        //

        let endpoints = [
            `https://private-anon-fe71e37dda-pizzaapp.apiary-mock.com/restaurants/${id}/menu`,
            `https://private-anon-fe71e37dda-pizzaapp.apiary-mock.com/restaurants/${id}`
        ]
        return await axios.all(endpoints.map((endpoints) => axios.get(endpoints))).then(res => {
            return {
                success : true,
                data : res
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

export default SingelRestaurant;
