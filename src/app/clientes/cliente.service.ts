import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //ruta del CRUD
  private urlEndpoint2 : string = 'http://localhost:8081/televigilancia/getClientes';

  constructor(private http: HttpClient) { }

  getClientes():Observable<Cliente[]>{
    this.http.get<Cliente[]>(this.urlEndpoint2);
    return this.http.get(this.urlEndpoint2).pipe(map((response)=> response as Cliente[]));
  }
}
