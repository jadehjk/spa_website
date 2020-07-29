import * as React from 'react';
import {withRouter, Route} from 'react-router-dom';
import Constants from '../Constants';

import INavbarItem from '../types/INavbarItem';
import Projects from '../components/Projects';
import Navbar from './Navbar';
// import Constants from '../Constants';
// import Header from './Layout/Header';
// import Sidebar from './Layout/Sidebar';
// import Breadcrumbs from '../Breadcrumbs';
// import NavbarMobile from './Layout/NavbarMobile';
// import NavbarTablet from './Layout/NavbarTablet';
// import Banner from './Layout/Banner';
// import PaymentModal from './Layout/PaymentModal';
// import NotificationsContainer from '../Core/Notifications/NotificationContainer';
// import {OnboardingChecklist} from '../Onboarding';
// import ImpersonationBanner from './Layout/ImpersonationBanner';
// import {IAppStateContext, AppStateContext} from '../../AppState';
// import {IMenuItem} from '../Core/Droplist';

interface IRouteWithNavbarrProps {
    component: any;
    path: string | Array<string>
    exact?: boolean;
 }

const RouteWithNavbar: React.FC<IRouteWithNavbarrProps> = ({
    ...routeProps
}) => {
    return (
        <div className="container-fluid master-body">
            <Route {...routeProps} />
        </div>
   );
};

 

export default RouteWithNavbar;