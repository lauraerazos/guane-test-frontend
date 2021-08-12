import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const ROUTES: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'personaje/:id', component: PersonajesComponent },
    { path: '', redirectTo: 'principal', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
