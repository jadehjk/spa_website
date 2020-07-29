import * as React from 'react';
import {Redirect, Route, Switch, withRouter, BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Projects from './components/Projects';
import Constants from './Constants';

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import RouteWithNavbar from './Wrappers/RouteWithNavbar';


const {routes, strings} = Constants;
const {home, aboutMe, projects} = routes;
const {appbarTitle} = strings;

const App: React.FC<{}> = () => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const handleClose = (): void => {
      setAnchorEl(null);
   };

   const handleMenuOnClick = (event: React.MouseEvent<HTMLElement>):void => {
      setAnchorEl(event.currentTarget);
   }

   return (
      <BrowserRouter>
         <AppBar className="appbar-wrapper" position="static" >
            <Toolbar className="appbar-toolbar">
               <Link to={home}><Typography variant="h6"> {appbarTitle} </Typography></Link>
               <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOnClick}>
                  <MenuIcon/>
               </IconButton>
               <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                     vertical: 'top',
                     horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
               >
                  <MenuItem
                     onClick={handleClose}
                     children={<Link to={home}>Home</Link>}
                  />
                  <MenuItem
                     onClick={handleClose}
                     children={<Link to={aboutMe}>About Me</Link>}
                  />
                     <MenuItem
                     onClick={handleClose}
                     children={<Link to={projects}>Projects</Link>}
                  />
               </Menu>
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

export default React.memo(App);
