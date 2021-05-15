import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import map from 'lodash/map';
import { routeConfig } from '@/utils/routeConfig';
import { Layout } from 'antd';

const App: React.FC = () => {
    return (
        <Layout.Content>
            <Switch>
                {map(Object.keys(routeConfig)).map((routeKey, index) => {
                    const Component: React.FC<RouteComponentProps> = routeConfig[routeKey].component;
                    return (
                        <Route
                            exact={routeConfig[routeKey].exact}
                            key={index}
                            path={routeConfig[routeKey].route}
                            render={(props) => {
                                const updatedProps = {
                                    ...props,
                                };
                                return <Component {...updatedProps} />;
                            }}
                        />
                    );
                })}
            </Switch>
        </Layout.Content>
    );
};

export default withRouter(App);
