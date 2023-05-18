import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperviseurService {
  private apiUrl = 'http://localhost:4000/api/v1/user'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAllSuperviseurs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getOne(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  deleteSuperviseur(superviseurId: any): Observable<any> {
    const url = `${this.apiUrl}/${superviseurId}`;
    return this.http.delete<any>(url);
  }

  updateSuperviseur(superviseurId: any, superviseurData: any): Observable<any> {
    const url = `${this.apiUrl}/${superviseurId}`;
    return this.http.put<any>(url, superviseurData);
  }


  ajouterSuperviseur(superviseur: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/superviseurs`, superviseur);
  }
}
