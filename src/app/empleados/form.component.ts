import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';
import { EmpleadoService } from './empleado.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  empleado:Empleado= new Empleado()
  titulo: string = "Crear Empleado"

  constructor(private empleadoService:EmpleadoService, private router:Router,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //this.cargarEmpleado()
  }

  //Cargar Empleado
  //cargarEmpleado(): void{
  //  this.activatedRoute.params.subscribe(params =>{
  //    let identificacion = params['identificacion']
  //    if(identificacion){
  //      this.empleadoService.getEmpleado(identificacion).subscribe((empleado) => this.empleado=this.empleado)
  //    }
  //  })
  //}

  public create(): void {
    //console.log("Clickeado");
    //console.log(this.empleado);
    this.empleadoService.create(this.empleado).subscribe( 
     response => this.router.navigate(['/empleados']))
     //swal('Nuevo Cliente', `Cliente ${this.empleado.primer_nombre} creado con éxito!`, 'success')
  }
}
