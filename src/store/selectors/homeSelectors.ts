import { ApplicationState } from '@/reducers';
import { createSelector } from 'reselect';
import { initialState } from '../reducers/homeReducer';
const selectHomeDomain = (state: ApplicationState) => state.home || initialState;

const makeSelectHome = (): unknown => createSelector(selectHomeDomain, (substate) => substate);
export const selectSample = (): string =>
    createSelector(selectHomeDomain, (substate) => substate.smaple);
export { makeSelectHome };
