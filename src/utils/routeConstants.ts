export type RouteConstantsPropTypes = {
    route: string;
    exact: boolean;
};
interface RouteConstantsTypes {
    [key: string]: RouteConstantsPropTypes;
}
export const routeConstants: RouteConstantsTypes = {
    root: {
        route: '/',
        exact: true,
    },
};
