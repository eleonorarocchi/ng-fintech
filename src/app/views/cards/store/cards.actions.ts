import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/models/card';

  
export const loadCards = createAction('[Cards List] Load Cards');

export const loadCardsSuccess = createAction(
  '[Cards List] Load Cards Success',
  props<{ cards: Card[] }>()
);

export const loadCardsFail = createAction('[Cards List] Load Cards Fail');

export const addCard = createAction(
  '[Cards List] Add Card',
  props<{ card: Card }>()
);

export const addCardSuccess = createAction(
  '[Cards List] Add Card Success',
    props<{ card: Card }>()
  );
  
export const addCardFail = createAction('[Cards List] Add Card Fail');

export const removeCard = createAction(
  '[Cards List] Remove Card',
  props<{ id: string }>()
);
  
export const removeCardSuccess = createAction(
'[Cards List] Remove Card Success',
  props<{ id: string }>()
);
  
export const removeCardFail = createAction('[Cards List] Remove Card Fail');

   