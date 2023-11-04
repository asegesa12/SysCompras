import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Departamento } from 'src/app/interfaces/departamento';
import { DepartamentoService } from 'src/app/services/departamento.service';

@Component({
  selector: 'app-ver-detalles-dept',
  templateUrl: './ver-detalles-dept.component.html',
  styleUrls: ['./ver-detalles-dept.component.css']
})
export class VerDetallesDeptComponent {

  id!: number;
  dept!: Departamento
  loading: boolean = false;
  routeSub!: Subscription;

  constructor( private service: DepartamentoService, private aRoute: ActivatedRoute){
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
      this.dept = data;
      console.log(data);
      this.loading = false;
    })
  }
}
