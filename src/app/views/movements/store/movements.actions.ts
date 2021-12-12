import { createAction, props } from '@ngrx/store';
import { Movement } from 'src/app/models/movement';

  
export const loadMovements = createAction(
  '[Movements List] Load Movements',
  props<{cardId: string | null | undefined, limit: number, offset: number}>()
);

export const loadMovementsSuccess = createAction(
  '[Movements List] Load Movement Success',
  props<{ movements: { data: Movement[], total: number } }>() // TODO: da tipare meglio
);

export const loadMovementsFail = createAction('[Movements List] Load Movement Fail');

export const clearMovements = createAction('[Movements List] Clear Movements');

   