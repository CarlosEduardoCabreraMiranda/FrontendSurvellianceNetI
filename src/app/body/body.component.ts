import { Component } from "@angular/core";

@Component({
    selector: 'body-app',
    templateUrl: './body.component.html',
    styleUrls: ['body.component.css']
})

export class BodyComponent{
    noticias: any ={nombre:'Carlos', apellido:'CM' }
    title: String = 'televigilancia-app';
   nombre: String = 'Carlos Eduardo Cabrera Miranda';
   edad: number = 18;
}