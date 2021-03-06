import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBCardLink } from 'mdb-react-ui-kit';

export default function ImageTitle({name, adress, latitude, longitude, id}) {
  return (
    <MDBCard >
      <MDBCardLink href={`/${id}`} className='text-decoration-none fw-bold text-dark'>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText> {adress}</MDBCardText>
      </MDBCardBody>
      </MDBCardLink>
    </MDBCard>
  );
}