import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialog } from './shared/components/confirm-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CardSelectorDialog } from './shared/components/card-selector-dialog.components';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { cardsReducer } from './views/cards/store/cards.reducer';
import { CardsEffects } from './views/cards/store/cards.effects';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialog,
    CardSelectorDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',
    }),
    StoreModule.forRoot({ cards: cardsReducer }),
    EffectsModule.forRoot([CardsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: false,
      features: {
        pause: true,
        lock: true,  
        persist: true, 
        export: true, 
        import: 'custom', 
        jump: true, 
        skip: true, 
        reorder: true, 
        dispatch: true, 
        test: true 
      }
    })
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'it-IT'},
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
