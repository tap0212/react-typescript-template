/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer } from 'redux';
import App, { AppStateType, initialState as AppInitialState } from 'store/reducers/appReducer';

export interface ApplicationState {
    App: AppStateType;
}
export const ApplicationInitialState = {
    App: AppInitialState,
};
/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    App,
});
