import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-agregar-articulos',
  templateUrl: './agregar-articulos.component.html',
  styleUrls: ['./agregar-articulos.component.css']
})
export class AgregarArticulosComponent {

  loading: boolean = false;
  id!: number
  form : FormGroup
  operacion : string = 'Agregar'



  constructor(private fb: FormBuilder, private service: ArticulosService, private _snackBar: MatSnackBar,
      private router: Router, private aRoute: ActivatedRoute
    ){
    this.form = this.fb.group({
      Descripcion: ['', Validators.required],
      Marca: ['', Validators.required],
      Unidad: ['', Validators.required],
      ExistenciaArticulo: ['', Validators.required],
      Estado: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id')!)
    console.log(this.id)

  }

  ngOnInit(): void {

    if(this.id != 0){
      this.operacion = 'Editar';
      this.obtenerProveedor(this.id);
    }



  }

  obtenerProveedor(id: number){
    this.loading = true;
    this.service.getProveedorById(id).subscribe(data => {
      this.form.setValue({
        Descripcion: data.descripcion,
        Marca: data.marca,
        Unidad: data.unidadMedida,
        ExistenciaArticulo: data.existencia,
        Estado: data.estado
      })
      console.log(data);
      this.loading = false;
    })
  }

  agregarEditarProveedor(){


    const articulo: Articulo = {

      descripcion: this.form.value.Descripcion,
      marca: this.form.value.Marca,
      unidadMedida: this.form.value.Unidad,
      existencia: this.form.value.ExistenciaArticulo,
      estado: this.form.value.Estado
    }

    if(this.id != 0){
      articulo.id = this.id;
      this.editar(this.id, articulo);

    } else {
      this.agregarProveedores(articulo);
    }
  }

  editar(id: number, articulo: Articulo){

    this.service.updateProveedor(id, articulo).subscribe( data => {

      this.router.navigate(['/listaArticulos']);
      console.log(data)

    })
  }

  agregarProveedores(articulo: Articulo){
    this.service.agregarProveedor(articulo).subscribe( data => {

      this.mensajeExito();
      this.router.navigate(['/listaArticulos']);
      console.log(data);
    })
  }

  mensajeExito(){
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('Agregado Con Exito', '', {
        duration:3500,
        horizontalPosition: 'right'
      })

    }, 1500);
  }
}
