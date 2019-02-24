import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/store/api.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Launch } from 'src/app/store/models';
import { FilterAction, FilterLoaded, FilterError, LoadFilter } from './filter.actions';


@Injectable()
export class FilterEffects {

    constructor(private actions$: Actions, private apiService: ApiService) {}

    @Effect()
    getFilterLaunches$ = this.actions$.pipe(
        ofType(FilterAction.LoadFilter),
        switchMap((action: LoadFilter) =>
            this.apiService.getLaunches(action.payload).pipe(
                map((launches: Launch[]) => new FilterLoaded(launches)),
                catchError(() => of(new FilterError()))
            )
        )
    );
    
}