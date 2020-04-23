import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesservicioService {

  private url = environment.urlpaises;//utilizo la variable del environment de desarrollo

  constructor(private http:HttpClient) { }

  obtenerPaises() {
    return this.http.get(this.url); //hago la peticion a nuestra api
}

}
