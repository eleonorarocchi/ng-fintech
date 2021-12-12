import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card';
import { CardFormComponent } from './components/card-form.component';
import { addCard, addCardSuccess, loadCards, removeCard, removeCardSuccess } from './store/cards.actions';
import { selectCards } from './store/cards.selectors';

@Component({
  selector: 'er-cards',
  template: `
   <mat-drawer-container class="drawer-container" autosize>
    <div class="drawer-sidenav-content">
      <er-card-list (addCard)="drawer.opened ? null : drawer.toggle()" (removeCard)="removeFromList($event)" (seeTransactions)="seeTransactions($event)" [cards]="cards$ | async" ></er-card-list>
    </div>
    <mat-drawer #drawer class="drawer-sidenav" mode="side" position="end">
      <er-card-form #cardform (close)="closeRegForm()" (addCard)="addCard($event)"></er-card-form>
    </mat-drawer>
  </mat-drawer-container>
  `,
  styles: [`
    .drawer-container {
      position: absolute;
      right: 0px;
      left: 0px;
      bottom: 0px;
      top: 64px;
    }
    
    .drawer-sidenav-content {
      width: 100%;
      height: 100%;
    }
    
    .drawer-sidenav {
      padding: 20px;
      width: 50%;
      height: 100%;
    }
  `]
})
export class CardsComponent implements OnInit {
  cards$ : Observable<readonly Card[]> = this._store.select(selectCards) 
  @ViewChild('cardform', {read: CardFormComponent}) public cardForm!: CardFormComponent;
  @ViewChild('drawer') public drawer!: MatDrawer;
  
  constructor(private _snackBar: MatSnackBar, private _router: Router, private _store: Store, private _actionsListener$: ActionsSubject) { }

  ngOnInit(): void {
    this._store.dispatch(loadCards());
  }

  addCard(obj: Card) {
    this._store.dispatch(addCard({ card: obj }))
    this._actionsListener$
      .pipe(ofType(addCardSuccess)).subscribe((result) =>
      {
        if(!!result.card)
          this._snackBar.open('La nuova carta è stata aggiunta.', 'Chiudi');
        else 
          this._snackBar.open('Ups, si è verificato un errore', 'Chiudi');
      });
  }

  removeFromList(id: string) {
    this._store.dispatch(removeCard({ id }));
    this._actionsListener$
      .pipe(ofType(removeCardSuccess)).subscribe((result) =>
      {
        if(!!result)
          this._snackBar.open('La carta è stata rimossa', 'Chiudi');
        else 
          this._snackBar.open('Ups, si è verificato un errore', 'Chiudi');
      });
  }

  seeTransactions(id: string) {
    this._router.navigate(['/dashboard/movements/', id])
  }

  closeRegForm() {
    this.cardForm.cleanup();
    this.drawer.toggle();
  }

}
