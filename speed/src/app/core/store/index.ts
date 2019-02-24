import { MetaReducer, ActionReducerMap } from '@ngrx/store';

import * as fromTypes from './crit-options/crit-options.reducer';
import * as fromValues from './crit-values/crit-values.reducer';
import * as fromFilter from './filter/filter.reducer';

export interface RootState {
    filter: fromFilter.FilterState;
    options: fromTypes.OptionsState;
    values: fromValues.ValuesState;

}

export const reducers: ActionReducerMap<RootState> = {
    filter: fromFilter.reducer,
    options: fromTypes.reducer,
    values: fromValues.reducer
};

export const metaReducers: MetaReducer<RootState>[] = [];