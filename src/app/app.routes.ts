import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const ROUTES: Routes = [
    { path: 'principal', component: PrincipalComponent },
    { path: 'personaje/:id', component: PersonajesComponent },
    { path: '', redirectTo: 'principal', pathMatch: 'full' }
];
  
@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule { }