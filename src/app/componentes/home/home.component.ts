import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expression:boolean = false;

  lista = [{'name': 'Matías', 'perfil': '1'}, {'name': 'Octavio', 'perfil': '2'}, {'name': 'Mario', 'perfil': '3'}];

  constructor() { }

  ngOnInit(): void {
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
