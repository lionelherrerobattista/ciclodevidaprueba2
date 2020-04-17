import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Producto} from '../../../clases/producto';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  @Input() productoParaMostrar: Producto;
  @Output() productoParaBorrar: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  borrarProducto()
  {
    console.info("borrarProducto");
    //Emito el evento borrarProducto
    //con el Producto que recibo del detalle:
    this.productoParaBorrar.emit(this.productoParaMostrar);
  }

}
