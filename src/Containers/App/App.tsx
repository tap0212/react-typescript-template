import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import map from 'lodash/map';
import { routeConfig } from '@/utils/routeConfig';
import { ThemeProvider } from 'styled-components';

import { Layout } from 'antd';
import { THEME } from '@/Themes/colors';
import GlobalStyle from '@/globalStyles';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={THEME}>
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
                <GlobalStyle />
            </Layout.Content>
        </ThemeProvider>
    );
};

export default withRouter(App);
