import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {
  title: String = 'Televigilancia';
  desarrolladores = [{nombre :'Carlos Eduardo Cabrera Miranda',campo: 'Senior'},{nombre :'Juan José Urbano Perdomo',campo: 'Senior'}]
  fechaCreacion: String = '19/09/2023'
}
