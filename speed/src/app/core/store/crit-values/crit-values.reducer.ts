import { CriterionActionValues, LoadSelectValue } from './crit-values.actions';

export interface ValuesState {
  value: number;
}

export const initialState: ValuesState = {
    value: 0
};

export function reducer(state = initialState, action: LoadSelectValue): ValuesState {
  switch (action.type) {
    case CriterionActionValues.LoadSelectValue:
        return { ...state, value: action.payload };
    default:
        return state;

  }
}