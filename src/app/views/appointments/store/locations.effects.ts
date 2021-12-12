import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AppointmentsService } from 'src/app/api/appointments.service';
import { loadLocations, loadLocationsFail, loadLocationsSuccess } from './locations.actions';

@Injectable()
export class LocationsEffects {
 
  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(loadLocations),
    exhaustMap(() => {
      return this._appService.getLocations()
      .pipe(
         map(locations => loadLocationsSuccess({ locations })),
         catchError((error) => of(loadLocationsFail()))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private _appService: AppointmentsService
  ) {}
}