import * as React from 'react';
import {Switch, BrowserRouter} from 'react-router-dom';
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

import {ReactComponent as IconBrandLinkedin} from '../Logos/Brand/linkedin.svg';
import {ReactComponent as IconBrandGithub} from '../Logos/Brand/github.svg';
import {ReactComponent as IconFilesResume} from '../Logos/Files/resume.svg';


const {routes, strings, links} = Constants;
const {home, aboutMe, projects} = routes;
const {github, linkedIn} = links;
const {appbarTitle} = strings;

const App: React.FC<{}> = () => {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

   const handleClose = (): void => {
      setAnchorEl(null);
   };

   const handleMenuOnClick = (event: React.MouseEvent<HTMLElement>):void => {
      setAnchorEl(event.currentTarget);
   }

   const menuItemLinks: Object = {
      'Home': home,
      'About Me':aboutMe,
      'Projects': projects
   };

   const renderDropMenuItems = (): ReadonlyArray<React.ReactNode> => {
         return Object.entries(menuItemLinks).map(([name, link]) => (
            <MenuItem
               onClick={handleClose}
               children={<Link to={link}>{name}</Link>}
            />
         ));
   };

   return (
      <BrowserRouter>
         <AppBar className="appbar-wrapper" position="static" >
            <Toolbar className="appbar-toolbar">
            <Typography variant="subtitle2" className="appbar-external-links">
               <a href={github} target="_blank" title="Go to Github Repo"><IconBrandGithub /></a>
               <a href={linkedIn} target="_blank" title="Go to Linkedin"><IconBrandLinkedin className="linkedIn-logo" /></a>
               <a className="resume-link" download href="Uploads/Resume_Eun Pyo Jason Lee.pdf" title="Download Resume"><IconFilesResume/></a>
            </Typography>
            
               <Typography variant="h5" className="appbar-title"> <Link to={home}>{appbarTitle} </Link></Typography>
               <IconButton className="droppable-menu-btn" edge="start" color="inherit" aria-label="menu" onClick={handleMenuOnClick}>
                  <MenuIcon className="droppable-menu-icon"/>
               </IconButton>
               <Menu
                  className="droppable-menu"
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
                  {renderDropMenuItems()}
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
