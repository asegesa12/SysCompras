import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Articulo } from '../interfaces/articulo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Articulo[]>{
    return this.http.get<Articulo[]>('https://localhost:7268/api/Articulo');
  }

  getProveedorById(id: number): Observable<Articulo> {
    return this.http.get<Articulo>(`https://localhost:7268/api/Articulo/${id}`);
  }

  deleteProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7268/api/Articulo/${id}`);
  }

  agregarProveedor(articulo: Articulo): Observable<Articulo>{
    return this.http.post<Articulo>(`https://localhost:7268/api/Articulo`, articulo);
  }

  updateProveedor( id: number, articulo: Articulo): Observable<void>{
    return this.http.put<void>(`https://localhost:7268/api/Articulo/${id}`, articulo )
  }
}
