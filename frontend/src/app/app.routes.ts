import { Routes } from '@angular/router';
import { TeacherPerformanceComponent } from './teacher-performance/teacher-performance.component';

export const routes: Routes = [
  { 
    path: 'teacher-performance', 
    component: TeacherPerformanceComponent 
  },
  { 
    path: '', 
    redirectTo: 'teacher-performance', 
    pathMatch: 'full' 
  },
  { 
    path: '**', 
    redirectTo: 'teacher-performance' 
  }
];