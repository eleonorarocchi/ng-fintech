import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { AppointmentComponent } from './components/appointment.component';
import { MapComponent } from './components/map.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { locationsReducer } from './store/locations.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LocationsEffects } from './store/locations.effects';


@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppointmentsRoutingModule,
    StoreModule.forFeature('locations', locationsReducer),
    EffectsModule.forFeature([LocationsEffects]),
  ]
})
export class AppointmentsModule { }
