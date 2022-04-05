import React, {useEffect, useState} from 'react'
import Restaurant from '../../../actions/get/restaurant';
import List from '../../../components/cards/_imageTittle'; 

export default function ResturangListpage() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(null);
  
  const [errors, setErrors] = useState({
    message :''
  });


  useEffect(() => {
    let isMounted = true;
        setLoading(true);

        Restaurant().then((res) => {
            if(isMounted && res.success)
              setRestaurants(res.data);
            else
              setErrors({
                ...errors,
                message : 'Someting went wrong.. comeback later... '
              })
            
           setLoading(false)
        })

    return () => {isMounted = false }
  }, [])


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
