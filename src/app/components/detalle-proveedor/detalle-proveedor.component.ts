import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css']
})
export class DetalleProveedorComponent implements OnInit, OnDestroy {

  id!: number;
  proveedor!: Proveedor
  loading: boolean = false;
  routeSub!: Subscription;

  constructor( private service: ProveedorService, private aRoute: ActivatedRoute){
     //this.id =  parseInt(this.aRoute.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.routeSub = this.aRoute.params.subscribe(data => {
      console.log(data);
      this.id = data['id'];
      this.obtenerProveedorId();
    })

  }

  ngOnDestroy(): void {
      this.routeSub.unsubscribe();
  }

  obtenerProveedorId(){
    this.loading = true;
    this.service.getProveedorById(this.id).subscribe( data =>{
      this.proveedor = data;
      console.log(data);
      this.loading = false;
    })
  }
}
