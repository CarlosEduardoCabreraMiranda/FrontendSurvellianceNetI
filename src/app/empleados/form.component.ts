import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentEmpleado implements OnInit {

  empleado: Empleado = new Empleado()
  titulo: string = "Registrar Empleado."

  constructor(
    private empleadoService: EmpleadoService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarEmpleado()
  }

//obtener Por Id
cargarEmpleado(): void {
  this.activatedRoute.params.subscribe(params => {
    let id = params['id']
    if (id) {
      this.empleadoService.getEmpleado(id).subscribe((empleado) =>
      this.empleado = empleado)
    }
  })
}


  public create(): void {
    // console.log("Clickeado");
    console.log(this.empleado);

    this.empleadoService.create(this.empleado).subscribe(
      response => {
        // Registro exitoso
        console.log('Empleado creado exitosamente:', response);
        this.router.navigate(['/empleados']);
      },
      error => {
        // Caso de error
        alert('Sucedio un error al registrar al empleado, probablemente estas son las causas:\n -Información está incompleta \n -El email ya existe');
        this.router.navigate(['/empleados']);
      }
    );
  }

  //Servicio para el actualizar empleado
  update():void{
    this.empleadoService.update(this.empleado).subscribe( empleado=>{
      this.router.navigate(['/empleados'])
      swal.fire('Empleado Actualizado', `Empleado ${empleado.primer_nombre}
      ${empleado.primer_apellido} actualizado con éxito!`, 'success')
    })
  }

}
