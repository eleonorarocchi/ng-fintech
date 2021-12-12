import { createAction, props } from '@ngrx/store';
import { Location } from 'src/app/models/location';

  
export const loadLocations = createAction('[Locations List] Load Locations');

export const loadLocationsSuccess = createAction(
  '[Locations List] Load Locations Success',
  props<{ locations: Location[] }>()
);

export const loadLocationsFail = createAction('[Locations List] Load Locations Fail');