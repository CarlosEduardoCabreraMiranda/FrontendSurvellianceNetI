import { Injectable } from '@angular/core';
import { Catalogo } from './catalogo';
import { Observable,map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../empleados/empleado';


map
@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
//ruta del CRUD
  private urlEndpoint : string = 'http://localhost:8081/televigilancia/getProductos';
  private urlGetById : string = 'http://localhost:8081/televigilancia/getProducto';

  private urlSaveProducto: string = 'http://localhost:8081/televigilancia/saveProducto';

  private urlUpdateProducto: string = 'http://localhost:8081/televigilancia/updateProducto';
  
  private urlDeleteProducto: string = 'http://localhost:8081/televigilancia/deleteProducto';
  
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getProductos():Observable<Catalogo[]>{
   this.http.get<Catalogo[]>(this.urlEndpoint);
    return this.http.get(this.urlEndpoint).pipe(map((response)=> response as Catalogo[]));
  }

  create(catalogo: Catalogo): Observable<Catalogo> {
    return this.http.post<Catalogo>(this.urlSaveProducto, catalogo, { headers: this.httpHeaders });
  }

  getCatalogo(id:any):Observable<Catalogo>{
    return this.http.get<Catalogo>(`${this.urlGetById}/${id}`)
  }

  
  update(catalogo: Catalogo):Observable<Catalogo>{
    return this.http.put<Catalogo>(`${this.urlUpdateProducto}/${catalogo.codigo_producto}`,catalogo,{headers:this.httpHeaders} )
  }


  delete(id: number): Observable<Catalogo>{
    return this.http.delete<Catalogo>(`${this.urlDeleteProducto}/${id}`,{headers:this.httpHeaders})
  }
}
