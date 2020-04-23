import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { AdminComponent } from './pages/input/admin/admin.component';
import { DetalleAlumnosComponent } from './pages/input/detalle-alumnos/detalle-alumnos.component';
import { ListadoAlumnosComponent } from './pages/input/listado-alumnos/listado-alumnos.component';
import { FormAlumnoComponent } from './pages/input/form-alumno/form-alumno.component';
import { PaisesservicioService } from './servicios/paisesservicio.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    AdminComponent,
    DetalleAlumnosComponent,
    ListadoAlumnosComponent,
    FormAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


  ],
  providers: [PaisesservicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
