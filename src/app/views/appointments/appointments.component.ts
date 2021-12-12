import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { AppointmentsService } from 'src/app/api/appointments.service';
import { Location } from 'src/app/models/location';
import { loadLocations } from './store/locations.actions';
import { selectLocations } from './store/locations.selectors';

@Component({
  selector: 'er-appointments',
  template: `
    <mat-drawer-container class="drawer-container" autosize>
      <div class="drawer-sidenav-content" (click)="closeDrawer()">
        <mat-selection-list #location [multiple]="false">
          <mat-list-option *ngFor="let loc of locations$ | async" [value]="loc._id"  (click)="selectLocation($event, loc._id)">
            <div class="simple-row">
              <mat-icon class="simple-col">domain</mat-icon>
              <div class="simple-col">{{loc.name}}<br/><span class="text-small">{{loc.address}}</span></div>
            </div>
          </mat-list-option>
        </mat-selection-list>
      </div>
      <mat-drawer #drawer class="drawer-sidenav" mode="side" position="end">
        <er-appointment [location]="selectedLocation$ | async" [daysWithSlots]="daysWithSlots$ | async" (closeDrawer)="closeDrawer($event)"></er-appointment>
      </mat-drawer>
    </mat-drawer-container>
    
  `,
  styleUrls: ['appointments.component.css']
})
export class AppointmentsComponent {
  @ViewChild('drawer') public drawer!: MatDrawer;
  locations$ : Observable<Location[]> = this._store.select(selectLocations) 
  selectedLocationId$ = new BehaviorSubject<number>(0); 
  selectedLocation$ = this.selectedLocationId$.pipe(
    map((id)=> {
      return this._store.select(selectLocations).pipe(map(arr => arr.filter(item => item._id === id)[0] ))
    }),
    switchMap(results => results)
  )

  daysWithSlots$ = this.selectedLocationId$.pipe(switchMap(locationId => { return locationId !== null ? this._service.getSlots(locationId) : of(null)}))

  constructor(private _snackBar: MatSnackBar, private _service: AppointmentsService, private _store: Store) { }

  ngOnInit() {
    this._store.dispatch(loadLocations());
  }
  
  selectLocation(event: Event, locationId: number) {
    event.stopPropagation();
    this.selectedLocationId$.next(locationId);

    if(!this.drawer.opened)
      this.drawer.toggle();
  }

  closeDrawer($event?: string) {
    if(!!$event)
    {
      this._snackBar.open($event, 'Chiudi');
      this.selectedLocationId$.next(0);
    }
    if(this.drawer.opened)
      this.drawer.toggle();
  }
}
