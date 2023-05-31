import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuperviseurService {
  private apiUrl = 'http://localhost:4000/api/v1/user'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getOne(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  statusChange(UserId: any): Observable<any> {
    const url = `${this.apiUrl}Status/${UserId}`;
    return this.http.put<any>(url, null);
  }

  updateUser(UserId: any, UserData: any): Observable<any> {
    const url = `${this.apiUrl}/${UserId}`;
    return this.http.put<any>(url, UserData);
  }

  ajouterUser(User: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, User);
  }
}
