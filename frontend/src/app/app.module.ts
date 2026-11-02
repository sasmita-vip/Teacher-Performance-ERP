import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts'; 
import { TeacherPerformanceComponent } from './teacher-performance/teacher-performance.component';

@NgModule({
  declarations: [
    TeacherPerformanceComponent
  ],
  imports: [
    NgChartsModule
  ]
})
export class TeacherPerformanceModule { }
