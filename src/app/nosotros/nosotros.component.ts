import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
  title: String = 'Televigilancia';
  desarrolladores = [{nombre :'Carlos Eduardo Cabrera Miranda',campo: 'Senior'},{nombre :'Juan José Urbano Perdomo',campo: 'Senior'}]
  fechaCreacion: String = '19/09/2023'
}
