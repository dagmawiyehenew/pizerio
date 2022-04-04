import React, {useEffect, useState} from 'react'

export default function ResturangListpage() {
  const [restaurants, setRestaurants] = useState(null);
  const [isLoading, setLoading] = useState(null);


  useEffect(() => {
    let isMounted = true;
    
    
    
    return () => {
      isMounted = false
    }
  }, [restaurants])
  

  return (
    <>

    </>
  )
}
