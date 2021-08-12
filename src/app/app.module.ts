import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routes'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PrincipalComponent } from './components/principal/principal.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonajesComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    PaginatorModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
