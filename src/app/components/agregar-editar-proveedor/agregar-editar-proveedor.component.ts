import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { dominicanIdValidator } from 'src/app/validators';

@Component({
  selector: 'app-agregar-editar-proveedor',
  templateUrl: './agregar-editar-proveedor.component.html',
  styleUrls: ['./agregar-editar-proveedor.component.css']
})
export class AgregarEditarProveedorComponent implements OnInit {

  loading: boolean = false;
  id!: number
  form : FormGroup
  operacion : string = 'Agregar'



  constructor(private fb: FormBuilder, private service: ProveedorService, private _snackBar: MatSnackBar,
      private router: Router, private aRoute: ActivatedRoute
    ){
    this.form = this.fb.group({
      Cedula: ['', Validators.required],
      NombreComercial: ['', Validators.required],
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
        Cedula: data.cedula,
        NombreComercial: data.nombreComercial,
        Estado: data.estado
      })
      console.log(data);
      this.loading = false;
    })
  }

  agregarEditarProveedor(){


    const proveedor: Proveedor = {

      cedula: this.form.value.Cedula,
      nombreComercial: this.form.value.NombreComercial,
      estado: this.form.value.Estado
    }

    if(this.id != 0){
      proveedor.id = this.id;
      this.editar(this.id, proveedor);

    } else {
      this.agregarProveedores(proveedor);
    }
  }

  editar(id: number, proveedor: Proveedor){

    this.service.updateProveedor(id, proveedor).subscribe( data => {

      this.router.navigate(['/listaProveedores']);
      console.log(data)

    })
  }

  agregarProveedores(proveedor: Proveedor){
    this.service.agregarProveedor(proveedor).subscribe( data => {

      this.mensajeExito();
      this.router.navigate(['/listaProveedores']);
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
