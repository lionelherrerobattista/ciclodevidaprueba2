import { Component } from '@angular/core';
import { Producto } from '../../../clases/producto';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {

  title = 'Registro de productos';

  listaProductos:Producto[];
  productoSeleccionado:Producto;

  constructor() {

    this.listaProductos = [
      { id: 1, descripcion: "arroz", tipo:"solido", fechaDeVencimiento:'16/4/2021', precio:45, rutaDeFoto:''},
      { id: 2, descripcion: "bife", tipo:"solido", fechaDeVencimiento:'20/4/2020', precio:180, rutaDeFoto:''}
    ];

  }


  tomarProductoCreado(NuevoProducto: Producto)
  {
    // Guardar en la lista de productos:
    this.listaProductos.push(NuevoProducto);
  }

  //Tomar el producto enviado desde el componente detalle-producto:
  tomarProductoParaDetalles(NuevoProducto: Producto)
  {
    this.productoSeleccionado=NuevoProducto;
  }

  tomarProductoParaBorrar(productoParaBorrar: Producto)
  {
    let indiceArray;

    this.listaProductos.forEach(function (producto, indice) {
      if(producto.id == productoParaBorrar.id)
      {
        console.info(indice);
        indiceArray = indice;
      }
    });

    this.listaProductos.splice(indiceArray, 1);

  }

}
