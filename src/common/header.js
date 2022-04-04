import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from '../containers/View/resturang/list';


export default function Header() {

  let menu = [
      {
          path : '/',
          title : 'Home',
          page : {LandingPage}
      }
  ];


  return (
    <div>
       <Router>
            <Switch>
      
              <Route exact path="/">
                <LandingPage />
              </Route>
            </Switch>
       
        </Router>
    </div>
  )
}
