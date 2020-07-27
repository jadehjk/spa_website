import * as React from 'react';
import {Redirect, Route, Switch, withRouter, BrowserRouter} from 'react-router-dom';
import Constants from './Constants';
import Home from './components/Home';
import RouteWithSidebar from './Wrappers/RouteWithSidebar';


const {routes} = Constants;
const {root} = routes;

class App extends React.Component<{}, {}> {
   componentDidUpdate() {
     
   }

   componentDidMount() {
     
   }

   render() {
      return (
         <BrowserRouter>
            <Switch>
              <RouteWithSidebar exact path={root} component={Home}/>
            </Switch>
         </BrowserRouter>
      );
   }
}

export default React.memo(App);
