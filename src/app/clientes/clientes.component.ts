import { Component } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
clientes: Cliente[] = [
  {idCliente:1, nombre:"Carlos", apellido:"Cabrera", email:"example@gmail.com", FechaCreado:"Marzo"},
  {idCliente:2, nombre:"Juan Jose", apellido:"Urbano", email:"example2@gmail.com", FechaCreado:"Abril"}
];

}

