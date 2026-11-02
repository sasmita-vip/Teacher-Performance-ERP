
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) {}

  getPerformance(): Observable<any[]> {
    return this.http.get<any[]>('teachers.json');
  }
}
