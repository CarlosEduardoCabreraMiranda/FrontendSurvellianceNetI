import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //ruta del CRUD
  private urlEndpoint : string = 'http://localhost:8081/televigilancia/getEmpleados';

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<Empleado[]>{
    this.http.get<Empleado[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Empleado[]));
  }
}
