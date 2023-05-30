import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListPaysService {
  private apiUrl = 'http://localhost:4000/api/v1/pays'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAllPays(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getOne(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  deletePays(paysId: any): Observable<any> {
    const url = `${this.apiUrl}/${paysId}`;
    return this.http.delete<any>(url);
  }

  updatePays(paysId: any, paysData: any): Observable<any> {
    const url = `${this.apiUrl}/${paysId}`;
    return this.http.put<any>(url, paysData);
  }
  ajouterPays(Pays: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, Pays);
  }
}
