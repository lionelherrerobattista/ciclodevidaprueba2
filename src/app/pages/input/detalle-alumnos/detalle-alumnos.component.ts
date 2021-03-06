import { Component, OnInit ,Input} from '@angular/core';
import { Alumno } from '../../../clases/alumno';

@Component({
  selector: 'app-detalle-alumnos',
  templateUrl: './detalle-alumnos.component.html',
  styleUrls: ['./detalle-alumnos.component.css']
})

export class DetalleAlumnosComponent implements OnInit {

  //Recibe el alumno (Input) y lo muestra:
  @Input() alumnoParaMostrar: Alumno;

  constructor() { }

  ngOnInit() {
  }

}

