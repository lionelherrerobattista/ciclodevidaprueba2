import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Producto} from '../../../clases/producto';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

 //Output que permite que otros componentes lo vean:
 @Output() productoCreado: EventEmitter<any>= new EventEmitter<any>();

 unProducto:Producto;

 constructor() {

 }

 ngOnInit() {

 }

 nuevoProducto()
 {
   console.info("nuevoProducto");
   let id:number= Math.floor((Math.random() * 1000) + 1);
   this.unProducto= new Producto( id, " ", " ", " ", 1, " ");
 }

 crearProducto()
 {
   console.info("crearProducto");

   //Emito el evento ProductoCreado
   //con el Producto que recibo del formulario:
   this.productoCreado.emit(this.unProducto);

   this.unProducto= null; //Ya cargué el Producto
 }

}
