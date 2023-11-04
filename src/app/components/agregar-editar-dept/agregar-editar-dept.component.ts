import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-agregar-editar-dept',
  templateUrl: './agregar-editar-dept.component.html',
  styleUrls: ['./agregar-editar-dept.component.css']
})
export class AgregarEditarDeptComponent {
  loading: boolean = false;
  id!: number
  form : FormGroup
  operacion : string = 'Agregar'



  constructor(private fb: FormBuilder, private service: DepartamentoService, private _snackBar: MatSnackBar,
      private router: Router, private aRoute: ActivatedRoute
    ){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      estado: ['', Validators.required],

    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id')!)

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
      this.form.patchValue({
        nombre: data.nombre,
        estado: data.estado,

      })
      console.log(data);
      this.loading = false;
    })
  }

  agregarEditarProveedor(){


    const departamento: Departamento = {

      nombre: this.form.value.nombre,
      estado: this.form.value.estado
    }

    if(this.id != 0){
      departamento.id = this.id;
      this.editar(this.id, departamento);

    } else {
      this.agregarProveedores(departamento);
    }
  }

  editar(id: number, departamento: Departamento){
    this.loading = true;
    this.service.updateProveedor(id, departamento).subscribe( () => {
      this.loading = false;
      this.router.navigate(['/listDpet']);

    })
  }

  agregarProveedores(departamento: Departamento){
    this.service.agregarProveedor(departamento).subscribe( data => {

      this.mensajeExito();
      this.router.navigate(['/listDpet']);
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
