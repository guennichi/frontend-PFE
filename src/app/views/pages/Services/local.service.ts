import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  private apiUrl = 'http://localhost:4000/api/v1/local'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }




  getAllLocals(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deleteLocal(LocalId: any): Observable<any> {
    const url = `${this.apiUrl}/${LocalId}`;
    return this.http.delete<any>(url);
  }

  updateLocal(LocalId: any, LocalData: any): Observable<any> {
    const url = `${this.apiUrl}/${LocalId}`;
    return this.http.put<any>(url, LocalData);
  }
}
