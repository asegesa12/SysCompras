import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoProveedorComponent } from './components/listado-proveedor/listado-proveedor.component';
import { AgregarEditarProveedorComponent } from './components/agregar-editar-proveedor/agregar-editar-proveedor.component';
import { DetalleProveedorComponent } from './components/detalle-proveedor/detalle-proveedor.component';
import { VerListadoDeptComponent } from './components/ver-listado-dept/ver-listado-dept.component';
import { AgregarEditarDeptComponent } from './components/agregar-editar-dept/agregar-editar-dept.component';
import { VerDetallesDeptComponent } from './components/ver-detalles-dept/ver-detalles-dept.component';
import { ListUnidadesComponent } from './components/list-unidades/list-unidades.component';
import { AgregarUnidadesComponent } from './components/agregar-unidades/agregar-unidades.component';
import { VerUnidadesComponent } from './components/ver-unidades/ver-unidades.component';
import { ListadoArticulosComponent } from './components/listado-articulos/listado-articulos.component';
import { AgregarArticulosComponent } from './components/agregar-articulos/agregar-articulos.component';
import { VerArticulosComponent } from './components/ver-articulos/ver-articulos.component';
import { ListaOrdenesComponent } from './components/lista-ordenes/lista-ordenes.component';
import { AgregarOrdenesComponent } from './components/agregar-ordenes/agregar-ordenes.component';
import { VerOrdenesComponent } from './components/ver-ordenes/ver-ordenes.component';

const routes: Routes = [


  { path: '', redirectTo: 'listaProveedores', pathMatch: 'full'},
  { path: 'listaProveedores', component: ListadoProveedorComponent},
  { path: 'agregarProveedor', component: AgregarEditarProveedorComponent},
  { path: 'verProveedor/:id', component: DetalleProveedorComponent},
  { path: 'EditarProveedor/:id', component: AgregarEditarProveedorComponent},
  { path: 'listDpet', component: VerListadoDeptComponent},
  { path: 'agregarDpet', component: AgregarEditarDeptComponent},
  { path: 'verDept/:id', component: VerDetallesDeptComponent},
  { path: 'EditarDept/:id', component: AgregarEditarDeptComponent},
  { path: 'listaUnidades', component: ListUnidadesComponent},
  { path: 'agregarUnidades', component: AgregarUnidadesComponent},
  { path: 'EditarUnidades/:id', component: AgregarUnidadesComponent},
  { path: 'verUnidades/:id', component: VerUnidadesComponent},
  { path: 'listaArticulos', component: ListadoArticulosComponent},
  { path: 'agregarArticulo', component: AgregarArticulosComponent},
  { path: 'EditarArticulo/:id', component: AgregarArticulosComponent},
  { path: 'verArticulo/:id', component: VerArticulosComponent},
  { path: 'listaOrdenes', component: ListaOrdenesComponent},
  { path: 'agregarOrdenes', component: AgregarOrdenesComponent},
  { path: 'EditarOrdenes/:id', component: AgregarOrdenesComponent},
  { path: 'VerOrdenes/:id', component: VerOrdenesComponent},



  { path: '**', redirectTo: 'listaProveedores', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
