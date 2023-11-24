import { Component, OnInit } from '@angular/core';
import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';
import { Router,ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class FormComponent implements OnInit{
  catalogo: Catalogo = new Catalogo();
  titulo: string = 'Agregar Producto'
  constructor(
    private catalogoService: CatalogoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProducto()
  }
  cargarProducto(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.catalogoService.getCatalogo(id).subscribe((catalogo) =>
        this.catalogo = catalogo)
      }
    })
  }


public create(): void {
  console.log(this.catalogo);
  this.catalogoService.create(this.catalogo).subscribe(
    response => {
      // Registro exitoso
      console.log('Producto creado exitosamente:', response);
      this.router.navigate(['/home']);
    },
    error => {
      // Caso de error
      alert('Sucedio un error al registrar al producto, probablemente estas son las causas:\n -Información está incompleta \n -El usuario ya existe');
      this.router.navigate(['/home']);
    }
  );

}


//Servicio para el actualizar cliente
update():void{
  this.catalogoService.update(this.catalogo).subscribe( catalogo=>{
    this.router.navigate(['/catalogo'])
    swal.fire('Producto Actualizado', `Producto ${catalogo.nombre} actualizado con éxito!`, 'success')
  })
}

}

