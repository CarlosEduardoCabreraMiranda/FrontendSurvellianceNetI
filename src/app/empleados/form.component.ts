import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponentEmpleado implements OnInit {

  empleado: Empleado = new Empleado()
  titulo: string = "Registrar Empleado."

  constructor(private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
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
}
