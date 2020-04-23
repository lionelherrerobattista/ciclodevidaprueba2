import { Component, OnInit } from '@angular/core';
import { PaisesservicioService } from '../../servicios/paisesservicio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private PaisesservicioService:PaisesservicioService ) { }

  ngOnInit(): void {

    this.PaisesservicioService.obtenerPaises().subscribe(resultado => {
      console.log(resultado);
    }, error => {
        console.log('Error');
    });

  }

}
