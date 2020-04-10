import { Component } from '@angular/core';
import { Alumno } from '../../../clases/alumno';
// import { Profesor } from './clases/profesor';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

  title = 'Registro de alumnos';

  //Alumnos
  listadoPrincipal: Alumno[];
  alumnoSeleccionado:Alumno;

  //Profesores:
  // profesorParaMostrar:Profesor;
  // ListadoProfesoresPrincipal:Profesor[];

  constructor() {

    // this.profesorParaMostrar= new Profesor("Clementina","Programacion",777);

    this.listadoPrincipal = [
      { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
      { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
    ];

    // this.ListadoProfesoresPrincipal= [
    //   { apellido: "Alvarez" ,materia:"matematicas",legajo: 666 },
    //   { apellido: "Villagran" ,materia:"prog 1",legajo: 333 }
    // ];
  }

  //Tomar el alumno enviado desde el componente form-alumno:
  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    // Guardar en la lista principal:
    this.listadoPrincipal.push(NuevoAlumno);
  }

  //Tomar el alumno enviado desde el componente detalle-alumno:
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;
  }

  // tomarProfesorParaDetalles(NuevoProfe: Profesor)
  // {
  //   this.profesorParaMostrar=NuevoProfe;
  // }
  // mostrarProfesor(parametroProfesor:Profesor)
  // {
  //     console.info("profesor",parametroProfesor);
  //     //this.profesorParaMostrar=parametroProfesor;
  //     this.ListadoProfesoresPrincipal.push(parametroProfesor);
  // }
}
