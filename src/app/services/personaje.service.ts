import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private http: HttpClient) { }

  obtenerPersonajes(idsPersonajes: number[]): Observable<any> {
    return this.http.get(environment.APIUrl + '/character/' + idsPersonajes);
  }

  obtenerLocacion(url: string): Observable<any> {
    return this.http.get(url);
  }

  obtenerEpisodio(url: string): Observable<any> {
    return this.http.get(url);
  }
  
}
