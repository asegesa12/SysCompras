import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-ver-articulos',
  templateUrl: './ver-articulos.component.html',
  styleUrls: ['./ver-articulos.component.css']
})
export class VerArticulosComponent {

  id!: number;
  articulo!: Articulo
  loading: boolean = false;
  routeSub!: Subscription;

  constructor( private service: ArticulosService, private aRoute: ActivatedRoute){
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
      this.articulo = data;
      console.log(data);
      this.loading = false;
    })
  }
}
