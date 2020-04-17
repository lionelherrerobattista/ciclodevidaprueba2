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
import { ListadoProductosComponent } from './pages/input/listado-productos/listado-productos.component';
import { FormProductoComponent } from './pages/input/form-producto/form-producto.component';
import { DetalleProductosComponent } from './pages/input/detalle-productos/detalle-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    AdminComponent,
    ListadoProductosComponent,
    FormProductoComponent,
    DetalleProductosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
