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

interface IMasterProps {
   children: any;
   navbar?: boolean;
}

const RouteWithNavbar: React.FC<IRouteWithNavbarrProps> = ({
    ...routeProps
}) => {
    const {routes} = Constants;
   
    const navItems = React.useMemo((): ReadonlyArray<INavbarItem> => {

        const result: INavbarItem[] = [{
           name: 'Home',
           to: routes.home
        }];

  
        result.push({
           name: 'About Me',
           to: routes.aboutMe
        });

  
        result.push({
            name: 'Projects',
            to: routes.projects
        });  
        return result;
     }, []);


    return (
        <>
        <header>
            <div className="container-fluid">
                {/* <Header /> */}
                header
            </div>
        </header>
        <div className="container-fluid master-body">
            <div className="row">
                {/* <Navbar /> */}
                <Navbar navItems={navItems} />
                
                <div className="content-continer-full col-xs-12">
                    <Route {...routeProps} />
                </div>
            </div>
        </div>
        </>
   );
};

 

export default RouteWithNavbar;