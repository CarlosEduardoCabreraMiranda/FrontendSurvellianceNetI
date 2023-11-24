import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
clientes: Cliente[]=[];

constructor(private clienteService:ClienteService){}

ngOnInit():void {
  this.clienteService.getClientes().subscribe(
     clientes => this.clientes=clientes);

}

delete(cliente: Cliente): void {
  swal.fire({
    title: 'Está seguro?',
    text: `¿Seguro que desea eliminar al cliente ${cliente.primer_nombre} ${cliente.primer_apellido}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, eliminar',
    cancelButtonText: 'No, cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      this.clienteService.delete(cliente.identificacion).subscribe(
        response => {
          this.clientes = this.clientes.filter(cli => cli !== cliente);
          swal.fire(
            'Cliente eliminado!',
            `Cliente ${cliente.primer_nombre} ${cliente.primer_apellido} Eliminado con éxito!`,
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

