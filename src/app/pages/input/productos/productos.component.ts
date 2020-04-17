import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../clases/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  producto:Producto;

  constructor() { }

  ngOnInit(): void {


  }

  CargarProducto() {

  }

}
