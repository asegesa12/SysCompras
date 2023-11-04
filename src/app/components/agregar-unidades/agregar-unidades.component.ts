import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadMedida } from 'src/app/interfaces/unidadMedida';
import { UnidadmedidaService } from 'src/app/services/unidadmedida.service';

@Component({
  selector: 'app-agregar-unidades',
  templateUrl: './agregar-unidades.component.html',
  styleUrls: ['./agregar-unidades.component.css']
})
export class AgregarUnidadesComponent {

  loading: boolean = false;
  id!: number
  form : FormGroup
  operacion : string = 'Agregar'



  constructor(private fb: FormBuilder, private service: UnidadmedidaService, private _snackBar: MatSnackBar,
      private router: Router, private aRoute: ActivatedRoute
    ){
    this.form = this.fb.group({
      Descripcion: ['', Validators.required],
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
        Estado: data.estado
      })
      console.log(data);
      this.loading = false;
    })
  }

  agregarEditarProveedor(){


    const unidad: UnidadMedida = {

      descripcion: this.form.value.Descripcion,
      estado: this.form.value.Estado
    }

    if(this.id != 0){
      unidad.id = this.id;
      this.editar(this.id, unidad);

    } else {
      this.agregarProveedores(unidad);
    }
  }

  editar(id: number, unidad: UnidadMedida){

    this.service.updateProveedor(id, unidad).subscribe( data => {

      this.router.navigate(['/listaUnidades']);
      console.log(data)

    })
  }

  agregarProveedores(unidad: UnidadMedida){
    this.service.agregarProveedor(unidad).subscribe( data => {

      this.mensajeExito();
      this.router.navigate(['/listaUnidades']);
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
