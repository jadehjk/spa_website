import * as React from 'react';
import {Link} from 'react-router-dom';
// import Droplist from '../../Core/Droplist';
import INavbarItem from '../types/INavbarItem';

interface INavbarTabletProps {
    navItems: ReadonlyArray<INavbarItem>;
 }
 
 const Navbar: React.FC<INavbarTabletProps> = ({navItems}) => {
 
    const renderItem = (navItem : INavbarItem): JSX.Element => {
       const {name, to} = navItem;
       return (<Link to={to}>{name}</Link>);
    };
 
    return (
       <div className="navbar-tablet">
          <ul>{navItems.map((item, i) => <li className="menu-item" key={i}>{renderItem(item)}</li>)}</ul>
       </div>
    );
 };
 
 export default Navbar;  