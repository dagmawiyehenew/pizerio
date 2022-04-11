import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardLink } from 'mdb-react-ui-kit';

export default function CardDefault(props) {
  return (
    <MDBCard className='rounded-0'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText> {props.adress}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}