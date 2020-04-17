import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/clases/producto';


@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  //Recibe un listado de productos del componente admin:
  @Input() listadoProductos: Producto[] ;

  //Evento del producto seleccionado:
  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>();

   constructor() {
    //Lista de los productos -placeholder-:
    this.listadoProductos = [
      { id: 1, descripcion: "arroz", tipo:"solido", fechaDeVencimiento:'16/4/2020', precio:45, rutaDeFoto:''},
      { id: 1, descripcion: "arroz", tipo:"solido", fechaDeVencimiento:'16/4/2020', precio:45, rutaDeFoto:''}
    ];

   }

   ngOnInit() {
   }

   mostrarDetalles(unProducto:Producto)
   {
     console.info("mostrar detalles", unProducto);

     //Emite el evento con el producto seleccionado:
     this.productoSeleccionado.emit(unProducto);
   }
}
