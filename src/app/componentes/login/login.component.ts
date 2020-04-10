import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../clases/usuario'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  name: string;

  // creo un objeto
  usuario = new Usuario();

  //Creo una función
  Ingresar() {
    console.log(this.usuario);

    //Esto que sigue va en la clase:
    if(this.usuario.email == 'admin@mail.com' &&
      this.usuario.pass == '1234')
    {
      //tiene  que llevar a home
      this.route.navigate(['admin']); //nombre tiene que ser igual al del path
    }
    else
    {
      //tiene que llevar a error
      this.route.navigate(['error']);
    }

  }

}
