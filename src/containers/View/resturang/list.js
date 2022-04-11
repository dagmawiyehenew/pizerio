import React, {useEffect, useState} from 'react'
import Restaurant from '../../../actions/get/restaurant';
import HorizontalList from '../../../components/ListGroup/horizontalList';
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
 
        <HorizontalList 
          data={restaurants} 
          size={'md'}
        />
    }
    </>
  )
}
