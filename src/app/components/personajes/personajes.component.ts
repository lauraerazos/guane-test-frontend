import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  error = false;
  personajeInfo : any = {};
  origen : any = {};
  episodio : any = {};
  urlOrigen : string;
  urlEpisodio : string;

  constructor(private route: ActivatedRoute, private personajeService: PersonajeService) { }

  ngOnInit(): void {

    this.error = false;
    this.route.params.subscribe(params => {
      this.personajeService.obtenerPersonajes(params.id).subscribe(data => {
        this.personajeInfo = data;
        this.urlOrigen = data.origin.url;
        this.urlEpisodio = data.episode[0];
        this.obtenerLocacion(this.urlOrigen);
        this.obtenerEpisodio(this.urlEpisodio);
        this.error = false;
      }, err => {
        this.error = true;
      })
    });    
  }

  obtenerLocacion(url : string){
    this.personajeService.obtenerLocacion(url).subscribe(data => {
      this.origen = data;
      this.error = false;
      }, err => {
        this.error = true;
    })
  }

  obtenerEpisodio(url : string){
    this.personajeService.obtenerEpisodio(url).subscribe(data => {
      this.episodio = data;
      this.error = false;
      }, err => {
        this.error = true;
    })
  }
}
