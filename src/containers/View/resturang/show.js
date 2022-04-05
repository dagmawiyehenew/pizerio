import React, {useEffect, useState} from 'react'
import { useParams} from "react-router-dom";
import SingelRestaurant from '../../../actions/get/singelRestaurant';
import MenuBycategory from '../../../actions/utils/menuBycategory';

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


  console.log(restaurant);

 
  return ( 
    <>
      {
        isLoading ? 'Loading ...' :
          <>
            <div>
               { restaurant ? Object.keys(restaurant).map((keyName, i) => (
                    <li className="travelcompany-input" key={i}>
                        <span className="input-label">key: {i} Name: {restaurant[keyName]}</span>
                    </li>
                ))
                : 'Loading ...' 
               }
            </div>

            <div>
                {menus ? menus.Pizza.map((slize, index) => {
                        return <div key={index}>{slize.name} {slize.price} {slize['topping'].slice(',').join(' | ')}</div>
                      })
                  : 'Not found ... '
                }
            </div>
          </>
        }
    </>
  )
}

