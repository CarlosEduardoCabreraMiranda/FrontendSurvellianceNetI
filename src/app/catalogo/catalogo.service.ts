import { Injectable } from '@angular/core';
import { Catalogo } from './catalogo';
import { Observable,map } from 'rxjs';
import { HttpClient } from '@angular/common/http';


map
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
//ruta del CRUD
  private urlEndpoint : string = 'http:localhost:8081/productos';

  constructor(private http: HttpClient) { }

  getProductos():Observable<Catalogo[]>{
   this.http.get<Catalogo[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Catalogo[]));
  }
}
