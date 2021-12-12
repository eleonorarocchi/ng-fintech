import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './movements.component';
import { MovementComponent } from './components/movement.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MovementsEffect } from './store/movements.effects';
import { movementsReducer } from './store/movements.reducer';


@NgModule({
  declarations: [
    MovementsComponent,
    MovementComponent
  ],
  imports: [
    CommonModule,
    MovementsRoutingModule,
    SharedModule,
    StoreModule.forFeature('movements', movementsReducer),
    EffectsModule.forFeature([MovementsEffect]),
  ]
})
export class MovementsModule { }
