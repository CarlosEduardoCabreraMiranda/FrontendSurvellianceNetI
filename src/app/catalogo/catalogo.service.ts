import { Injectable } from '@angular/core';
import { PRODUCTOS } from './catalogo.json';
import { Catalogo } from './catalogo';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor() { }
  getProductos():Observable<Catalogo[]>{
    return of (PRODUCTOS);
  }
}
