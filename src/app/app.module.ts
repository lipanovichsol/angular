import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfesorComponent } from '../profesor/profesor.component';
import { FrutaComponent } from './fruta/fruta.component';
import { FormsModule } from '@angular/forms'; //elementos de formulario
import { routing , appRoutingProviders } from './app.routing'; //routeado
import { DibujoComponent } from './dibujo/dibujo.component'; 
import {HttpClientModule} from '@angular/common/http'; //para usar peticiones http

@NgModule({
  declarations: [
    AppComponent, 
    ProfesorComponent, FrutaComponent, DibujoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
