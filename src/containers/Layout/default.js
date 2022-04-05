import React, { Fragment} from 'react';
import {Container} from 'react-bootstrap';

const LayoutDefault = ({children}) => (
  
  <Fragment>
        <Container fluid>
            {children}
        </Container>
    </Fragment>
)

export default LayoutDefault;