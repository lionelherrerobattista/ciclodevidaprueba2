import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.css']
})
export class ListadoAlumnosComponent implements OnInit {

  //Recibe un listado de alumnos del componente admin:
  @Input() listadoAlumnos: Alumno[] ;

  //Evento del alumno seleccionado:
  @Output() alumnoSeleccionado: EventEmitter<any>= new EventEmitter<any>();

   constructor() {
    //Lista de los alumnos -placeholder-:
    this.listadoAlumnos = [
      { apellido: 'Aguas' ,nombre:"rogelio",legajo: 999 },
      { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 999 }
    ];
   }

   ngOnInit() {
   }

   mostrarDetalles(unAlumno:Alumno)
   {
     console.info("mostrar detalles", unAlumno);

     //Emite el evento con el alumno seleccionado:
     this.alumnoSeleccionado.emit(unAlumno);
   }

}
