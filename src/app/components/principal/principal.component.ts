import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  personajes: any[] = [];
  error = false;
  recordCount: number;
  first: number = 0;
  idsPersonajes: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(private router: Router, private personajeService: PersonajeService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos() {
    this.personajeService.obtenerPersonajes(this.idsPersonajes).subscribe(data => {
      this.personajes = data;
      this.error = false;
      this.recordCount = data.length;
    }, err => {
      this.error = true;
    })
  }

  onPageChange(event) {
    this.first = event.first+1;
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    this.idsPersonajes = range(this.first, this.first+9, 1);
    this.personajeService.obtenerPersonajes(this.idsPersonajes).subscribe(data => {
      this.personajes = data;
      this.error = false;
      this.recordCount = data.length
      
    }, err => {
      this.error = true;
    })
  }

  verDetalles(id: number){
    this.router.navigate(['personaje', id]);
  }

}
