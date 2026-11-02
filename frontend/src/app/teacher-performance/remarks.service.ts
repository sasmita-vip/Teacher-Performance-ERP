
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemarksService {

  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<any[]> {
    return this.http.get<any[]>('teachers.json');
  }

  getTeacherPerformance(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/performance/${id}`
    );
  }
}
