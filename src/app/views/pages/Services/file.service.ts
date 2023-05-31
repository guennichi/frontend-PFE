import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  private apiUrl = 'http://localhost:4000/api/v1/migration'; // Remplacez l'URL par celle de votre backend Node.js

  constructor(private http: HttpClient) { }

  getUploadedFiles() {
    return this.http.get<any[]>(this.apiUrl);
  }
  deleteFile(fileId: any): Observable<any> {
    const url = `${this.apiUrl}/${fileId}`;
    return this.http.delete<any>(url);
  }
  ajouterFile(File: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, File);
  }
}
