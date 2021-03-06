import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LayoutDefault from '../containers/Layout/default';
import LayoutIndex from '../containers/Layout/index';

import LandingPage from '../containers/View/resturang/list';
import SingelPage from '../containers/View/resturang/show';

import NotFound from '../containers/View/resturang/show';


export default function Header() {


  return (
    <div>
       <Router basename={'/'}>
            <Switch>
                
                <Route path="/:id/:path?" exact>
                    <LayoutIndex>
                        <Switch>
                            <Route path="/:id" component={SingelPage} />
                            <Route path="/:id/orders" component={SingelPage} />
                            <Route component={NotFound} />
                        </Switch>
                    </LayoutIndex>
                </Route>

                <Route>
                    <LayoutDefault>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                            <Route component={NotFound} />
                        </Switch>
                    </LayoutDefault>
                </Route>

            </Switch>
        </Router>
    </div>
  )
}
