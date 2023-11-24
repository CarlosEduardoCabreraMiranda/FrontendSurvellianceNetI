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

  private urlupdate: string = 'http://localhost:8081/televigilancia/updateEmpleado';

  private urlGetById : string = 'http://localhost:8081/televigilancia/getEmpleado';
  
  private urlDeleteEmpleado: string = 'http://localhost:8081/televigilancia/deleteEmpleado';

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  //Obtención de empleados
  getEmpleados(): Observable<Empleado[]> {
    this.http.get<Empleado[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Empleado[]));
  }

  //Método crear empleados
  create(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.urlsave, empleado, { headers: this.httpHeaders });
  }

  
  getEmpleado(identificacion: any):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.urlGetById}/${identificacion}`)
  }

  
  update(empleado: Empleado):Observable<Empleado>{
   return this.http.put<Empleado>(`${this.urlupdate}/${empleado.identificacion}`,empleado,{headers:this.httpHeaders} )
  }

  
  delete(id: number): Observable<Empleado>{
   return this.http.delete<Empleado>(`${this.urlDeleteEmpleado}/${id}`,{headers:this.httpHeaders})
  }
}

