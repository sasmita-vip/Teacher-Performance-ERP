import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private url = 'http://localhost:3000/api/teachers/performance';
  constructor(private http: HttpClient) {}
getData(): Observable<any> {
    return this.http.get(this.url);
  }
}