import React, {useEffect, useState} from 'react'
import axios from 'axios';

import List from '../../../components/cards/_imageTittle'; 

export default function ResturangListpage() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const [erros, setErrors] = useState({
    message :''
  });


  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    try {

     
      axios.get('https://private-anon-fe71e37dda-pizzaapp.apiary-mock.com/restaurants/').then((res) => {
        if(isMounted)
          setRestaurants(res.data);

          setErrors({
            ...erros,
            message : 'Someting went wrong.. comeback later... '
          })

        
    }).catch(erros => {
        if(isMounted){ console.log(erros)}

    }).finally(() => {
      setLoading(false);
    });
      
    } catch (error)  {
      if(isMounted){ console.log(error)}
    }

    return () => {isMounted = false }
  }, [])


console.log(restaurants);
  return (
    <>
    {
      isLoading ? 'Loading ...' :
 
      restaurants.map((item, index) => {
          return <List  
              key={index}
              id={item.id}
              name={item.name}
              adress={item.adress1}
              city={item.adress2}
              latitude={item.latitude}
              longitude={item.longitude}
          />
      })
      
    }
    </>
  )
}
