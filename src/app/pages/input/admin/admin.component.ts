import { Component } from '@angular/core';
import { Alumno } from '../../../clases/alumno';
import { Producto } from '../../../clases/producto';
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
  listaProductos:Producto[];
  productoSeleccionado:Producto;


  constructor() {

    this.listadoPrincipal = [
      { apellido: 'Aguas' ,nombre:"rogelio",legajo: 666 },
      { apellido: 'Mercurio' ,nombre:"Alfredo",legajo: 333 }
    ];

    this.listaProductos = [
      { id: 1, descripcion: "arroz", tipo:"solido", fechaDeVencimiento:'16/4/2020', precio:45, rutaDeFoto:''},
      { id: 1, descripcion: "arroz", tipo:"solido", fechaDeVencimiento:'16/4/2020', precio:45, rutaDeFoto:''}
    ];

  }

  //Tomar el alumno enviado desde el componente form-alumno:
  tomarAlumnoCreado(NuevoAlumno: Alumno)
  {
    // Guardar en la lista principal:
    this.listadoPrincipal.push(NuevoAlumno);
  }

  tomarProductoCreado(NuevoProducto: Producto)
  {
    // Guardar en la lista de productos:
    this.listaProductos.push(NuevoProducto);
  }

  //Tomar el alumno enviado desde el componente detalle-alumno:
  tomarAlumnoParaDetalles(NuevoAlumno: Alumno)
  {
    this.alumnoSeleccionado=NuevoAlumno;
  }

  //Tomar el producto enviado desde el componente detalle-producto:
  tomarProductoParaDetalles(NuevoProducto: Producto)
  {
    this.productoSeleccionado=NuevoProducto;
  }

}
