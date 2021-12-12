import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CardsService } from 'src/app/api/cards.service';
import { clearMovements, loadMovements, loadMovementsFail, loadMovementsSuccess } from './movements.actions';

@Injectable()
export class MovementsEffect {
 
  loadMovement$ = createEffect(() => this.actions$.pipe(
    ofType(loadMovements),
    switchMap(action => {
      if(action.cardId)
      {
        return this._cardsService.getMovements(action.cardId, action.limit, action.offset).pipe(
          map(movements => loadMovementsSuccess({ movements })),
          catchError((error) => of(loadMovementsFail()))
        )
      }
      else
          return of(loadMovementsSuccess({ movements: { data: [], total: 0 } }));
    })
  ));
  
  constructor(
    private actions$: Actions,
    private _cardsService: CardsService
  ) {}
}