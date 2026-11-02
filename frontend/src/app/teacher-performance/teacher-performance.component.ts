
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { RemarksService } from './remarks.service';

@Component({
  selector: 'app-teacher-performance',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule],
  templateUrl: './teacher-performance.component.html',
  styleUrls: ['./teacher-performance.component.css']
})
export class TeacherPerformanceComponent implements OnInit {

  teachersList: any[] = [];
  selectedTeacherId: number | null = null;

  remarks = 'Select a teacher from the dropdown menu to view performance analysis.';
  performanceState = 'neutral';
  loadingTeachers = true;

  barData: ChartConfiguration<'bar'>['data'] | null = null;
  lineData: ChartConfiguration<'line'>['data'] | null = null;

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 12,
          font: {
            family: 'Times New Roman',
            weight: 'bold',
            size: 14
          }
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
          font: {
            family: 'Times New Roman',
            size: 13
          }
        },
        grid: {
          color: '#f1f5f9'
        }
      },
      x: {
        ticks: {
          font: {
            family: 'Times New Roman',
            weight: 'bold',
            size: 14
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  constructor(
    private remarksService: RemarksService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTeachers();
  }

  loadTeachers(): void {
    this.loadingTeachers = true;

    this.remarksService.getTeachers().subscribe({
      next: (data) => {
        this.teachersList = data;
        this.loadingTeachers = false;
        this.remarks = data.length
          ? 'Select a teacher from the dropdown menu to view performance analysis.'
          : 'No teachers found in the directory.';

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Teacher directory loading error:', error);

        this.teachersList = [];
        this.loadingTeachers = false;
        this.remarks = 'Unable to load teachers.json. Please check the public folder.';

        this.cdr.detectChanges();
      }
    });
  }

  formatMarkdownToHtml(markdownText: string): string {
    if (!markdownText) {
      return '';
    }

    let formatted = markdownText;

    formatted = formatted.replace(
      /###\s*(.*?)(?=\n|$)/g,
      '<h3 style="margin-top:18px;margin-bottom:8px;font-size:18px;font-weight:bold;text-align:left;">$1</h3>'
    );

    formatted = formatted.replace(
      /^\s*-\s*(.*?)(?=\n|$)/gm,
      '<li style="margin-bottom:6px;line-height:1.6;list-style-type:disc;margin-left:20px;text-align:left;">$1</li>'
    );

    formatted = formatted.replace(/\n/g, '<br>');

    return formatted;
  }

  onTeacherChange(): void {
    if (this.selectedTeacherId === null) {
      return;
    }

    this.remarks = 'AI is analyzing performance trends...';
    this.performanceState = 'neutral';
    this.barData = null;
    this.lineData = null;

    this.remarksService
      .getTeacherPerformance(this.selectedTeacherId)
      .subscribe({
        next: (res) => {
          this.remarks = this.formatMarkdownToHtml(res.remarks || '');

          const upperRemarks = (res.remarks || '').toUpperCase();

          let trajectoryAccentColor = '#3b82f6';
          let trajectoryFillColor = 'rgba(59, 130, 246, 0.08)';

          if (
            upperRemarks.includes('DE-IMPROVED') ||
            upperRemarks.includes('DECLINED')
          ) {
            this.performanceState = 'de-improved';
            trajectoryAccentColor = '#dc2626';
            trajectoryFillColor = 'rgba(220, 38, 38, 0.08)';
          } else if (
            upperRemarks.includes('IMPROVED') ||
            upperRemarks.includes('PROGRESS')
          ) {
            this.performanceState = 'improved';
            trajectoryAccentColor = '#059669';
            trajectoryFillColor = 'rgba(5, 150, 105, 0.08)';
          }

          this.barData = {
            labels: res.terms,
            datasets: [{
              data: res.marks,
              label: 'Term Scores Breakdown',
              backgroundColor: ['#ef4444', '#f97316', '#3b82f6'],
              borderRadius: 6,
              maxBarThickness: 50
            }]
          };

          this.lineData = {
            labels: res.terms,
            datasets: [{
              data: res.marks,
              label: 'Term Performance Chart',
              borderColor: trajectoryAccentColor,
              backgroundColor: trajectoryFillColor,
              fill: true,
              tension: 0.2,
              pointRadius: 6,
              pointBackgroundColor: '#ffffff',
              pointBorderWidth: 3
            }]
          };

          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Performance analytics error:', error);

          this.remarks = 'Failed to fetch analytics tracking data from server. Please check whether the backend is running.';
          this.performanceState = 'neutral';

          this.cdr.detectChanges();
        }
      });
  }
}
