import { createReducer, on } from '@ngrx/store';
import { Card } from 'src/app/models/card';
import { addCard, addCardSuccess, loadCardsSuccess, removeCard, removeCardSuccess } from './cards.actions';

export interface CardsState {
    cards: Card[];
  }

export const initialState: CardsState = {
  cards: []
};

export const cardsReducer = createReducer(
    initialState,
    on(loadCardsSuccess, (state, {cards}) => ({ cards: cards }) ),
    on(addCardSuccess, (state, { card }) => ({ cards: [...state.cards, card]})),
    on(removeCardSuccess, (state, { id }) => ({ cards: state.cards.filter((card) => card._id !== id)})),
  );