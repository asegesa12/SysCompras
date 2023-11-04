import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UnidadMedida } from 'src/app/interfaces/unidadMedida';
import { UnidadmedidaService } from 'src/app/services/unidadmedida.service';

@Component({
  selector: 'app-ver-unidades',
  templateUrl: './ver-unidades.component.html',
  styleUrls: ['./ver-unidades.component.css']
})
export class VerUnidadesComponent {

  id!: number;
  unidad!: UnidadMedida
  loading: boolean = false;
  routeSub!: Subscription;

  constructor( private service: UnidadmedidaService, private aRoute: ActivatedRoute){
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
      this.unidad = data;
      console.log(data);
      this.loading = false;
    })
  }
}
