import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenesCompra } from 'src/app/interfaces/OrdenesCompra';
import { OrdenesCompraService } from 'src/app/services/ordenes-compra.service';

@Component({
  selector: 'app-agregar-ordenes',
  templateUrl: './agregar-ordenes.component.html',
  styleUrls: ['./agregar-ordenes.component.css']
})
export class AgregarOrdenesComponent {

  loading: boolean = false;
  id!: number
  form : FormGroup
  operacion : string = 'Agregar'
  minDate!: Date;
  maxDate!: Date;
  ordenRandom = Math.floor(Math.random() * 100000);


  constructor(private fb: FormBuilder, private service: OrdenesCompraService, private _snackBar: MatSnackBar,
      private router: Router, private aRoute: ActivatedRoute
    ){
    this.form = this.fb.group({
      OrderNumber: [this.generateRandomOrderNumber(), Validators.required],
      Estado: ['', Validators.required],
      Articulo: ['', Validators.required],
      Stock: ['', [Validators.required, Validators.min(0)]],
      Unidad: ['', Validators.required],
      CostoUnitario: ['', [Validators.required, Validators.min(0)]],
      FechaOrden: ['', Validators.required],
    })

    this.id = Number(this.aRoute.snapshot.paramMap.get('id')!)
    console.log(this.id)

    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear + 0, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

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
        OrderNumber: data.orderNumber,
        Estado: data.estado,
        Articulo: data.articulo,
        Stock: data.stock,
        Unidad: data.medida,
        CostoUnitario: data.costoUnitario,
        FechaOrden: data.fechaOrden

      })
      console.log(data);
      this.loading = false;
    })
  }

  agregarEditarProveedor(){


    const ordenes: OrdenesCompra = {

      orderNumber: this.form.value.OrderNumber,
      estado: this.form.value.Estado,
      articulo: this.form.value.Articulo,
      stock: this.form.value.Stock,
      medida: this.form.value.Unidad,
      costoUnitario: this.form.value.CostoUnitario,
      fechaOrden: this.form.value.FechaOrden
    }

    if(this.id != 0){
      ordenes.id = this.id;
      this.editar(this.id, ordenes);

    } else {
      this.agregarProveedores(ordenes);
    }
  }

  editar(id: number, ordenes: OrdenesCompra){

    this.service.updateProveedor(id, ordenes).subscribe( data => {

      this.router.navigate(['/listaOrdenes']);
      console.log(data)

    })
  }

  agregarProveedores(ordenes: OrdenesCompra){
    this.service.agregarProveedor(ordenes).subscribe( data => {

      this.mensajeExito();
      this.router.navigate(['/listaOrdenes']);
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

  generateRandomOrderNumber(): number {

    return Math.floor(Math.random() * 100000);
  }


}
