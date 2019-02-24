import { Action } from '@ngrx/store';

export enum CritActionTypes {
  TypesLoaded   = '[Global] TypesLoaded',
  TypesNotFound = '[Global] Types Not Found',
  LoadOptions     = '[Global] LoadOptions'
}

export class LoadOptions implements Action {
  readonly type = CritActionTypes.LoadOptions;
  constructor(readonly payload: any) {}
}

export class TypesLoaded implements Action {
  readonly type = CritActionTypes.TypesLoaded;
  constructor(readonly payload: any) {}
}

export class TypesNotFound implements Action {
  readonly type = CritActionTypes.TypesNotFound;
}


export type TypesActions = TypesLoaded | TypesNotFound | LoadOptions;