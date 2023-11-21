import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable, map } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //ruta del CRUD
  private urlEndpoint: string = 'http://localhost:8081/televigilancia/getEmpleados';
  private urlsave: string = 'http://localhost:8081/televigilancia/saveEmpleado';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  //Obtención de empleados
  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.urlEndpoint).pipe(map((response) => response as Empleado[]));
  }

  //Método crear empleados
  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.urlsave, empleado, { headers: this.httpHeaders });
  }
}

