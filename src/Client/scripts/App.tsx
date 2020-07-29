import * as React from 'react';
import {Redirect, Route, Switch, withRouter, BrowserRouter} from 'react-router-dom';
import Constants from './Constants';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import RouteWithNavbar from './Wrappers/RouteWithNavbar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
            <AppBar position="static">
               <Toolbar>
              
                  <Typography variant="h6"> Hi Jason </Typography>
                  <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
               </Toolbar>
            </AppBar>
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
