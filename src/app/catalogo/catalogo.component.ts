import { Component, OnInit } from '@angular/core';
import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
   catalogos: Catalogo[]
   constructor(private catalogoService:CatalogoService){}

ngOnInit():void {
  this.catalogoService.getProductos().subscribe(
     catalogos => this.catalogos=catalogos);
};
}

