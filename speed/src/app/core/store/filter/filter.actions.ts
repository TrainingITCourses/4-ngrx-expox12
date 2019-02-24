import { Action } from '@ngrx/store';
import { Launch } from 'src/app/store/models';

export enum FilterAction {
  LoadFilter  = '[Global] LoadFilter',
  FilterLoaded  = '[Global] FilterLoaded',
  FilterError  = '[Global] FilterError'
}

export class LoadFilter implements Action {
  readonly type = FilterAction.LoadFilter;
  constructor(readonly payload: any) {}
}

export class FilterLoaded implements Action {
  readonly type = FilterAction.FilterLoaded;
  constructor(readonly payload: Launch[]) {}
}

export class FilterError implements Action {
  readonly type = FilterAction.FilterError;
}

export type FilterActions = LoadFilter | FilterLoaded | FilterError;