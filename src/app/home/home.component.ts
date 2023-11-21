import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: String = "Televigilancia";
  descripcion: String = 'En este sitio web podrás mirar nuestros productos y servicios, además que podrás cotizar con nosotros. ¡Lo mejor en seguridad para tu empresa y hogar! Televigilancia, tú mejor opción.'
}
