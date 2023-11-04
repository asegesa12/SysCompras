import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrdenesCompra } from 'src/app/interfaces/OrdenesCompra';
import { OrdenesCompraService } from 'src/app/services/ordenes-compra.service';

@Component({
  selector: 'app-ver-ordenes',
  templateUrl: './ver-ordenes.component.html',
  styleUrls: ['./ver-ordenes.component.css']
})
export class VerOrdenesComponent {
  id!: number;
  ordenes!: OrdenesCompra
  loading: boolean = false;
  routeSub!: Subscription;

  constructor( private service: OrdenesCompraService, private aRoute: ActivatedRoute){
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
      this.ordenes = data;
      console.log(data);
      this.loading = false;
    })
  }
}
