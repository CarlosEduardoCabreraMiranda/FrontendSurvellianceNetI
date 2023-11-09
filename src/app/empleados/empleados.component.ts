import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';


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
}
