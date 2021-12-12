import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LocationsState } from "./locations.reducer";
import { first, take } from 'rxjs/operators';


export const getState = createFeatureSelector<LocationsState>('locations');
export const selectLocations = createSelector(
    getState,
    (state: LocationsState) => state.locations
  );