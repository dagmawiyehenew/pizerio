import React, { Fragment} from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import LayoutHeader from '../../common/headers/headerLayoutIndex';

const LayoutIndex = ({children}) => (
 
  <Fragment>
        <MDBContainer>
                {children}
        </MDBContainer>
    </Fragment>
)

export default LayoutIndex;