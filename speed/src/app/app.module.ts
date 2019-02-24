import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './launches/home.component';
import { ApiService } from './store/api.service';

import { CounterComponent, FilterRadioBoxComponent, FilterSelectComponent, LaunchesListComponent, WebSearchComponent } from "./shared/index";
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './core/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment.prod';
import { HttpClientModule } from '@angular/common/http';
import { TypesEffects, FilterEffects } from './core/index';

@NgModule({
  declarations: [
    AppComponent,
    WebSearchComponent,
    HomeComponent,
    LaunchesListComponent,
    CounterComponent,
    FilterRadioBoxComponent,
    FilterSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ TypesEffects, FilterEffects ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
