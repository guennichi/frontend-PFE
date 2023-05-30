import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MigrationService {
  private apiUrl = 'http://localhost:4000/api/v1/migration'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) { }




  getAllMigrations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
