import { Component, OnInit } from '@angular/core';
import { PaisesservicioService } from '../../servicios/paisesservicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expression:boolean = false;

  lista = [{'name': 'Matías', 'perfil': '1'}, {'name': 'Octavio', 'perfil': '2'}, {'name': 'Mario', 'perfil': '3'}];

  constructor(private PaisesservicioService:PaisesservicioService) { }

  ngOnInit(): void {
    //Función que maneja los datos de los paises
    this.PaisesservicioService.obtenerPaises().subscribe(resultado => {
      console.log(resultado);
    }, error => {
        console.log('Error');
    });
  }


  OcultarMostrar() {

    if(this.expression)
    {
      this.expression = false;
    }
    else
    {
      this.expression = true;
    }
  }

}
