export class Alumno {
  legajo:number;
  apellido:string;
  nombre:string;

  public constructor(legajo:number, apellido:string, nombre:string) {
    this.legajo = legajo;
    this.apellido = apellido;
    this.nombre = nombre;
  }

}
