import React, { Fragment} from 'react';
import {MDBContainer} from 'mdb-react-ui-kit';
import Header from '../../common/header';
const LayoutDefault = ({children}) => (
  
  <Fragment>
        <Header  
          title={'Välkomen till pizerio'}
        />
        <MDBContainer>
                {children}
        </MDBContainer>
    </Fragment>
)

export default LayoutDefault;