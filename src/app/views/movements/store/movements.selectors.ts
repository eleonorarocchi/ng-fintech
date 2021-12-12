import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovementsState } from "./movements.reducer";

export const getState = createFeatureSelector<MovementsState>('movements');

export const selectMovements = createSelector(
  getState,
  (state: MovementsState) => state.movements
);