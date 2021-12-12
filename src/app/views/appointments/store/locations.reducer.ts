import { createReducer, on } from '@ngrx/store';
import { loadLocationsSuccess } from './locations.actions';
import { Location } from 'src/app/models/location';

export interface LocationsState {
    locations: Location[];
  }

export const initialState: LocationsState = {
  locations: []
};

export const locationsReducer = createReducer(
    initialState,
    on(loadLocationsSuccess, (state, {locations}) => ({ locations }) ),
  );