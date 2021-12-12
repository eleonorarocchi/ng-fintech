import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { CardsService } from 'src/app/api/cards.service';
import { addCard, addCardFail, addCardSuccess, loadCards, loadCardsFail, loadCardsSuccess, removeCard, removeCardFail, removeCardSuccess } from './cards.actions';

@Injectable()
export class CardsEffects {
 
  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(loadCards),
    exhaustMap(() => {
      return this._cardsService.getCards()
      .pipe(
         map(cards => loadCardsSuccess({ cards })),
         catchError((error) => of(loadCardsFail()))
        )
      })
    )
  );

  addCard$ = createEffect(() => this.actions$.pipe(
    ofType(addCard),
    switchMap((action) => {
      return this._cardsService.postCard(action.card).pipe(
        map((card) => addCardSuccess({ card })),
        catchError((error) => of(addCardFail()))
      )
    })
  ));
  
  removeCard$ = createEffect(() => this.actions$.pipe(
    ofType(removeCard),
    switchMap((action) => {
      return this._cardsService.deleteCard(action.id).pipe(
        map((response) => {
          if(response)
            return removeCardSuccess({ id: action.id })
          else
            return removeCardFail()
        }),
        catchError((error) => of(removeCardFail()))
      )
    })
  ));
 
  constructor(
    private actions$: Actions,
    private _cardsService: CardsService
  ) {}
}