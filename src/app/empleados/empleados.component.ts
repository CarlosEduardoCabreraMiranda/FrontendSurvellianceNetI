import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent {
  empleados: Empleado[];
  constructor(private empleadoService:EmpleadoService){}

ngOnInit():void {
  this.empleadoService.getEmpleados().subscribe(
     empleados => this.empleados=empleados);

}

delete(empleado: Empleado): void {
  swal.fire({
    title: 'Está seguro?',
    text: `¿Seguro que desea eliminar al cliente ${empleado.primer_nombre} ${empleado.primer_apellido}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      this.empleadoService.delete(empleado.identificacion).subscribe(
        response => {
          this.empleados = this.empleados.filter(emp => emp !== empleado);
          swal.fire(
            'Cliente eliminado!',
            `Cliente ${empleado.primer_nombre} ${empleado.primer_apellido} Eliminado con éxito!`,
            'success'
          );
        },
        error => {
          console.error('Error al eliminar el cliente', error);
          swal.fire(
            'Error!',
            'Hubo un problema al eliminar el cliente. Por favor, inténtelo de nuevo más tarde.',
            'error'
          );
        }
      );
    }
  });
}
}
