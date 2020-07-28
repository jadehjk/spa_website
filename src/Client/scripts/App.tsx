import * as React from 'react';
import {Redirect, Route, Switch, withRouter, BrowserRouter} from 'react-router-dom';
import Constants from './Constants';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import RouteWithNavbar from './Wrappers/RouteWithNavbar';
import Projects from './components/Projects';



const {routes} = Constants;
const {home, aboutMe, projects} = routes;

class App extends React.Component<{}, {}> {
   componentDidUpdate() {
   }

   componentDidMount() {
     
   }

   render() {
      return (
         <BrowserRouter>
            <Switch>
              <RouteWithNavbar exact path={home} component={Home} />
              <RouteWithNavbar exact path={aboutMe} component={AboutMe} />
              <RouteWithNavbar exact path={projects} component={Projects} />
            </Switch>
         </BrowserRouter>
      );
   }
}

export default React.memo(App);
