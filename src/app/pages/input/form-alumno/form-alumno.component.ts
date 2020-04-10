import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.css']
})
export class FormAlumnoComponent implements OnInit {

  //Output que permite que otros componentes lo vean:
  @Output() alumnoCreado: EventEmitter<any>= new EventEmitter<any>();

  unAlumno:Alumno;

  constructor() {

  }

  ngOnInit() {
   // this.unAlumno= new Alumno("alfredo","mercurio",666);
  }

  nuevoAlumno()
  {
    console.info("nuevoAlumno");
    let legajo:number= Math.floor((Math.random() * 1000) + 1);
    this.unAlumno= new Alumno(legajo,"natalia","natalia");
  }

  crearAlumno()
  {
    console.info("crearAlumno");

    //Emito el evento alumnoCreado
    //con el alumno que recibo del formulario:
    this.alumnoCreado.emit(this.unAlumno);

    this.unAlumno= null; //Ya cargué el alumno
  }

}
