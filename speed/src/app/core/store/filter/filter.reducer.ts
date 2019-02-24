
import { Launch } from 'src/app/store/models';
import { FilterActions, FilterAction } from './filter.actions';

export interface FilterState {
  launches: Launch[]; 
}

export const initialState: FilterState = {
  launches: []
};

export function reducer(state = initialState, action: FilterActions): FilterState {
  switch (action.type) {
    case FilterAction.LoadFilter:
      return state;
    case FilterAction.FilterLoaded:
      return { launches: action.payload };
    case FilterAction.FilterError:
      return state;
    default:
      return state;

  }
  
}