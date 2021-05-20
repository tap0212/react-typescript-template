import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router';
import map from 'lodash/map';
import { routeConfig } from '@/utils/routeConfig';
import { ThemeProvider } from 'styled-components';

import { Layout } from 'antd';
import { THEME } from '@/Themes/colors';
import GlobalStyle from '@/globalStyles';
import { makeSelectApp } from '@/store/selectors/appSelectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose, Action } from 'redux';
interface StateProps {}
interface DispatchProps {}
type Props = StateProps & DispatchProps;

const App: React.FC = (props: Props) => {
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

export type Dispatch = (action: Action) => void;
const mapStateToProps = createStructuredSelector({
    app: makeSelectApp,
});
const mapDispatchToProps = {};
const withConnect = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withRouter)(App);
