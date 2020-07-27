import * as React from 'react';
import {withRouter, Route} from 'react-router-dom';
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

interface IRouteWithSidebarProps {
    component: any;
    path: string | Array<string>
    exact?: boolean;
 }

interface IMasterProps {
   children: any;
   navbar?: boolean;
}

const RouteWithSidebar: React.FC<IRouteWithSidebarProps> = ({
    ...routeProps
}) => {


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
                {/* <Sidebar /> */}
                Sidebar
                <div className="content-continer-full col-xs-12">
                    <Route {...routeProps} />
                </div>
            </div>
        </div>
        </>
   );
};

export default RouteWithSidebar;