import { Component } from '@angular/core';
import { TeacherPerformanceComponent } from './teacher-performance/teacher-performance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeacherPerformanceComponent],
  template: `<app-teacher-performance></app-teacher-performance>`
})
export class AppComponent {}