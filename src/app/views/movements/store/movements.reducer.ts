import { createReducer, on } from '@ngrx/store';
import { Movement } from 'src/app/models/movement';
import { clearMovements, loadMovementsSuccess } from './movements.actions';

export interface MovementsState {
    movements: {
      data: Movement[],
      total: number
    }
  }

export const initialState: MovementsState = {
  movements: {data: [], total: 0}
};

export const movementsReducer = createReducer(
    initialState,
    on(loadMovementsSuccess, (state, {movements}) => {
      const newState: MovementsState = { movements: { data: [...state.movements.data, ...movements.data], total : movements.total } };
      return  ( newState as MovementsState) 
    }),
    on(clearMovements, () => initialState )
  );