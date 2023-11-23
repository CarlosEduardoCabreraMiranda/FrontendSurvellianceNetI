import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./clientes.component.css']
})
export class FormComponentCliente implements OnInit {
  cliente: Cliente = new Cliente();
  titulo: string = 'Cotizar producto.'
  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente()
  }
  //obtener Por Id
  cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if (id) {
        this.clienteService.getCliente(id).subscribe((cliente) =>
        this.cliente = cliente)
      }
    })
  }


  //crear cliente
  public create(): void {
    console.log(this.cliente);
    this.clienteService.create(this.cliente).subscribe(
      response => {
        // Registro exitoso
        console.log('Cliente creado exitosamente:', response);
        this.router.navigate(['/home']);
      },
      error => {
        // Caso de error
        alert('Sucedio un error al registrar al cliente, probablemente estas son las causas:\n -Información está incompleta \n -El usuario ya existe');
        this.router.navigate(['/home']);
      }
    );

  }
}
