import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Articulo } from 'src/app/interfaces/articulo';
import { ArticulosService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent {

  constructor(private _snackBar: MatSnackBar, private _service: ArticulosService){}

  displayedColumns: string[] = ['Descripcion', 'Marca', 'Medida', 'Existencia', 'Estado', 'Actions'];
  dataSource = new MatTableDataSource<Articulo>();
  loading: boolean = false;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.obtenerProveedores()
  }

  obtenerProveedores(){
    this.loading = true;
    this._service.getProveedores().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data
      console.log(data);
    }, error => {
      this.loading = false;
      alert('Ha Ocurrido un Error En El Servidor');
    })
  }

  eliminar(id: number){

    this.loading = true;

    this._service.deleteProveedor(id).subscribe( () => {
      this.mensajeExito();
      this.obtenerProveedores();

    })



  }

  mensajeExito(){
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('Eliminado Con Exito', '', {
        duration:3500,
        horizontalPosition: 'right'
      })

    }, 3000);
  }

}
