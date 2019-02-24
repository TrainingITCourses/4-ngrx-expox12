
import { CritActionTypes, TypesActions } from './crit-options.actions';

export interface OptionsState {
  critType: any;
  options: any[];
  error: boolean;
}

export const initialState: OptionsState = {
  critType: null,
  options: [],
  error: false
};

export function reducer(state = initialState, action: TypesActions): OptionsState {
  switch (action.type) {

    case CritActionTypes.LoadOptions:
      return state;
    case CritActionTypes.TypesLoaded:
      return { options: action.payload.list, critType: action.payload.critType, error: false };
    case CritActionTypes.TypesNotFound:
      return { ...state, error: true };
    default:
      return state;
  }
} 