import React from 'react';
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import CardsWithHeaderImage from '../cards/_imageTittle'; 

export default function HorizontalList(props) {
  const {data, size} = props;

  return (
    <div>
      <MDBListGroup horizontal horizontalSize={size} >
         
        {
         data.map((item, index) => {
               return <MDBListGroupItem key={index} className='border-0'>
                      <CardsWithHeaderImage  
                            id={item.id}
                            name={item.name}
                            adress={item.adress1}
                            city={item.adress2}
                            latitude={item.latitude}
                            longitude={item.longitude}
                        />
                    </MDBListGroupItem>
            })
         }
         
      </MDBListGroup>
    </div>
  );
}