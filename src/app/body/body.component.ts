import { Component } from "@angular/core";

@Component({
    selector: 'body-app',
    templateUrl: './body.component.html',
    styleUrls: ['body.component.css']
})

export class BodyComponent{
    title: String = 'Televigilancia';
    desarrolladores = [{nombre :'Carlos Eduardo Cabrera Miranda',campo: 'semi-senior'},{nombre :'Juan José Urbano Perdomo',campo: 'Senior'}]
    fechaCreacion: String = '19/09/2023'
}