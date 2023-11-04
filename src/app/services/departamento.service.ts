import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departamento } from '../interfaces/departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Departamento[]>{
    return this.http.get<Departamento[]>('https://localhost:7268/api/Department');
  }

  getProveedorById(id: number): Observable<Departamento> {
    return this.http.get<Departamento>(`https://localhost:7268/api/Department/${id}`);
  }

  deleteProveedor(id: number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7268/api/Department/${id}`);
  }

  agregarProveedor(departamento: Departamento): Observable<Departamento>{
    return this.http.post<Departamento>(`https://localhost:7268/api/Department`, departamento);
  }

  updateProveedor( id: number, departamento: Departamento): Observable<void>{
    return this.http.put<void>(`https://localhost:7268/api/Department/${id}`, departamento )
  }
}
