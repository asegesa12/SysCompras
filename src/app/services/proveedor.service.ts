import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {



  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>('https://localhost:7268/api/Proveedor');
  }

  getProveedorById(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`https://localhost:7268/api/Proveedor/${id}`);
  }

  deleteProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7268/api/Proveedor/${id}`);
  }

  agregarProveedor(proveedor: Proveedor): Observable<Proveedor>{
    return this.http.post<Proveedor>(`https://localhost:7268/api/Proveedor`, proveedor);
  }

  updateProveedor( id: number, proveedor: Proveedor): Observable<void>{
    return this.http.put<void>(`https://localhost:7268/api/Proveedor/${id}`, proveedor )
  }
}
