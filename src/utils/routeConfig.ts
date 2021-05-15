import { routeConstants, RouteConstantsPropTypes } from './routeConstants';
import Home from '@/Containers/Home';
import NotFoundPage from '@/Containers/NotFoundPage';
type RouteConfigProp = {
    component: React.FC;
};

interface RouteConfig {
    [key: string]: RouteConfigProp & RouteConstantsPropTypes;
}
export const routeConfig: RouteConfig = {
    root: {
        component: Home,
        ...routeConstants.root,
    },
    notFoundPage: {
        component: NotFoundPage,
        route: '/',
        exact: true,
    },
};
