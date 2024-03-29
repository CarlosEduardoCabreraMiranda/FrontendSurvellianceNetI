export class Empleado {
    identificacion!: number;
    primer_nombre!: string;
    segundo_nombre!: string;
    primer_apellido!: string;
    segundo_apellido!: string;
    fecha_nacimiento!: string;
    direccion!: string;
    telefono!: string;
    usuario!: string;
    password!: string;
    fecha_ingreso!: string;
    cargo!: string;
    salario!: string;
}

/*
EN
Notes: 
- Avoid using String type of data because it calls a variable of
type object. Instead call a primitive string 
to make it easier for the language to understand what you try to do.

- The "!" symbol is used to make a implicit declaration of the variable

ES
Notas: Evite el uso de datos de tipo String porque llama una variable de
tipo objeto en su lugar, llame a un string primitivo para que 
al lenguaje le resulte más fácil entender lo que tratas de hacer.

- El símbolo "!" se utiliza para hacer una declaración implícita de la variable.
*/