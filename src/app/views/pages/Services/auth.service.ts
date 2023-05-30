import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:4000/api/v1/login'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }

  Login(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
