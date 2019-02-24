import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators';
import { TypesLoaded, TypesNotFound, CritActionTypes, LoadOptions } from './crit-options.actions';
import { ApiService } from 'src/app/store/api.service';
import { of } from 'rxjs';


@Injectable()
export class TypesEffects {

    constructor(private actions$: Actions, private apiService: ApiService) {}


    @Effect()
    public getOptions$ = this.actions$.pipe(
        ofType<LoadOptions>(CritActionTypes.LoadOptions),
        switchMap((action: LoadOptions) =>
        this.apiService
            .getOptions(action.payload)
            .pipe(
                map(options => new TypesLoaded({ list: options, critType: action.payload })),
                catchError(() => of(new TypesNotFound()))
            )
        )
    );
    
}