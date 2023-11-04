import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdenesCompra } from '../interfaces/OrdenesCompra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesCompraService {

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<OrdenesCompra[]>{
    return this.http.get<OrdenesCompra[]>('https://localhost:7268/api/OrdenesCompra');
  }

  getProveedorById(id: number): Observable<OrdenesCompra> {
    return this.http.get<OrdenesCompra>(`https://localhost:7268/api/OrdenesCompra/${id}`);
  }

  deleteProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7268/api/OrdenesCompra/${id}`);
  }

  agregarProveedor(ordenes: OrdenesCompra): Observable<OrdenesCompra>{
    return this.http.post<OrdenesCompra>(`https://localhost:7268/api/OrdenesCompra`, ordenes);
  }

  updateProveedor( id: number, ordenes: OrdenesCompra): Observable<void>{
    return this.http.put<void>(`https://localhost:7268/api/OrdenesCompra/${id}`, ordenes )
  }
}
