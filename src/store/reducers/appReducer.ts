/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';

export const { Types: AppTypes, Creators: AppCreators } = createActions({
    greet: ['payload'],
});
export type AppStateType = {
    greet: string;
};
export const initialState: AppStateType = { greet: 'hello' };

/* eslint-disable default-case, no-param-reassign */
export const homeContainerReducer = (
    state: AppStateType = initialState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: { type: any; payload: any },
): AppStateType =>
    produce(state, (draft) => {
        switch (action.type) {
            case AppTypes.GREET:
                draft.greet = action.payload;
                break;
        }
    });

export default homeContainerReducer;
