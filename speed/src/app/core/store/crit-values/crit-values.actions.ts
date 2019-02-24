import { Action } from '@ngrx/store';

export enum CriterionActionValues {

    LoadSelectValue = '[Global] LoadSelectValue'
}

export class LoadSelectValue implements Action {
    public readonly type = CriterionActionValues.LoadSelectValue;
    constructor(readonly payload: number) {}
}