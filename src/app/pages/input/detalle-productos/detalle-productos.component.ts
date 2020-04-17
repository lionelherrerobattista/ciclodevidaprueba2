import { Component, OnInit ,Input} from '@angular/core';
import {Producto} from '../../../clases/producto';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  @Input() productoParaMostrar: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  borrarProducto(producto:Producto)
  {

  }

}
