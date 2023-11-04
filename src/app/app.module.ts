import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarProveedorComponent } from './components/agregar-editar-proveedor/agregar-editar-proveedor.component';
import { ListadoProveedorComponent } from './components/listado-proveedor/listado-proveedor.component';
import { DetalleProveedorComponent } from './components/detalle-proveedor/detalle-proveedor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AgregarEditarDeptComponent } from './components/agregar-editar-dept/agregar-editar-dept.component';
import { VerDetallesDeptComponent } from './components/ver-detalles-dept/ver-detalles-dept.component';
import { VerListadoDeptComponent } from './components/ver-listado-dept/ver-listado-dept.component';
import { ListUnidadesComponent } from './components/list-unidades/list-unidades.component';
import { AgregarUnidadesComponent } from './components/agregar-unidades/agregar-unidades.component';
import { VerUnidadesComponent } from './components/ver-unidades/ver-unidades.component';
import { ListadoArticulosComponent } from './components/listado-articulos/listado-articulos.component';
import { AgregarArticulosComponent } from './components/agregar-articulos/agregar-articulos.component';
import { VerArticulosComponent } from './components/ver-articulos/ver-articulos.component';
import { MenuComponent } from './components/menu/menu.component';
import { AgregarOrdenesComponent } from './components/agregar-ordenes/agregar-ordenes.component';
import { ListaOrdenesComponent } from './components/lista-ordenes/lista-ordenes.component';
import { VerOrdenesComponent } from './components/ver-ordenes/ver-ordenes.component';












@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarProveedorComponent,
    ListadoProveedorComponent,
    DetalleProveedorComponent,
    AgregarEditarDeptComponent,
    VerDetallesDeptComponent,
    VerListadoDeptComponent,
    ListUnidadesComponent,
    AgregarUnidadesComponent,
    VerUnidadesComponent,
    ListadoArticulosComponent,
    AgregarArticulosComponent,
    VerArticulosComponent,
    MenuComponent,
    AgregarOrdenesComponent,
    ListaOrdenesComponent,
    VerOrdenesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
