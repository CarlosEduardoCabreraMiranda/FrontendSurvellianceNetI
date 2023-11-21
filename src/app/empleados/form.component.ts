import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Router } from '@angular/router';
EmpleadoService
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  empleado:Empleado= new Empleado()
  titulo: string = "Crear Empleado"

  constructor(private empleadoService:EmpleadoService, private router:Router){}

  ngOnInit(): void {
    
  }

  public create(): void {
    console.log("Clickeado");
    console.log(this.empleado);
    this.empleadoService.create(this.empleado).subscribe(response => this.router.navigate(['/empleados']))
  }
}
