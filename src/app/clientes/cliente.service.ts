import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //ruta del CRUD
  private urlEndpoint : string = 'http://localhost:8081/televigilancia/getClientes';
  private urlGetById : string = 'http://localhost:8081/televigilancia/getCliente';

  private urlSaveCliente: string = 'http://localhost:8081/televigilancia/saveCliente';

  private urlUpdateCliente: string = 'http://localhost:8081/televigilancia/updateCliente';
  
  private urlDeleteCliente: string = 'http://localhost:8081/televigilancia/deleteCliente';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getClientes():Observable<Cliente[]>{
    this.http.get<Cliente[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Cliente[]));
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlSaveCliente, cliente, { headers: this.httpHeaders });
  }

  getCliente(id:any):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlGetById}/${id}`)
  }

  
  update(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlUpdateCliente}/${cliente.identificacion}`,cliente,{headers:this.httpHeaders} )
  }


  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlDeleteCliente}/${id}`,{headers:this.httpHeaders})
  }


  
}
