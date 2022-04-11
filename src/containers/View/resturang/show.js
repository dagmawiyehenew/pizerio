import React, {useEffect, useState} from 'react'
import { useParams} from "react-router-dom";
import SingelRestaurant from '../../../actions/get/singelRestaurant';
import MenuBycategory from '../../../actions/utils/menuBycategory';
import ProductList from '../product/list';
import CardDefault from '../../../components/cards/default';
export default function ResturangPage() {
  
  let {id} = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menus, setMenus] = useState();
  const [isLoading, setLoading] = useState(null);



  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    SingelRestaurant(id).then((res) => {
      
      if(isMounted && res.success === true){
          setRestaurant(res.data[1].data);
          console.log(restaurant)
          MenuBycategory(res.data[0].data).then(data => {
            setMenus(data);
          });

          setLoading(false);
      }
    })

    return () => {isMounted = false }
  }, [])
 console.log();

  return ( 
    <>
      {
        isLoading ? 'Loading ...' :
          <>
              <ProductList 
                  products={menus}
                  restaurant={id}
              />
          </>
        }
    </>
  )
}

