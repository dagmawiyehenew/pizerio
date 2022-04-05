import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LayoutDefault from '../containers/Layout/default';

import LandingPage from '../containers/View/resturang/list';
import SingelPage from '../containers/View/resturang/show';


export default function Header() {


  return (
    <div>
       <Router basename={'/'}>
            <Switch>
                
                <Route path="/:id/:path?" exact>
                    <LayoutDefault>
                        <Switch>
                            <Route path="/:id/" component={SingelPage} />
                            <Route path="/:id/product" component={LandingPage} />
                        </Switch>
                    </LayoutDefault>
                </Route>

                <Route>
                    <LayoutDefault>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                        </Switch>
                    </LayoutDefault>
                </Route>

            </Switch>
        </Router>
    </div>
  )
}
