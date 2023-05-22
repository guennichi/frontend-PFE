import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {
  

  private apiUrl = 'http://localhost:4000/api/v1'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAllResponsables(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  deleteResponsable(responsableId: number): Observable<any> {
    const url = `${this.apiUrl}/${responsableId}`;
    return this.http.delete<any>(url);
  }

  updateResponsable(responsableId: number, responsableData: any): Observable<any> {
    const url = `${this.apiUrl}/${responsableId}`;
    return this.http.put<any>(url, responsableData);
  }
}
