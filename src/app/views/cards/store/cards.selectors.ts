import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CardsState } from "./cards.reducer";

export const getState = createFeatureSelector<CardsState>('cards');
export const selectCards = createSelector(
    getState,
    (state: CardsState) => state.cards
  );