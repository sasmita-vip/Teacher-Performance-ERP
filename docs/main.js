"use strict";
(self["webpackChunkteacher_impact_erp"] = self["webpackChunkteacher_impact_erp"] || []).push([["main"],{

/***/ 92
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _teacher_performance_teacher_performance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-performance/teacher-performance.component */ 4064);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 6124);


class AppComponent {
  static ɵfac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AppComponent)();
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-teacher-performance");
      }
    },
    dependencies: [_teacher_performance_teacher_performance_component__WEBPACK_IMPORTED_MODULE_0__.TeacherPerformanceComponent],
    encapsulation: 2
  });
}

/***/ },

/***/ 7920
/*!********************************************************!*\
  !*** ./src/app/teacher-performance/remarks.service.ts ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemarksService: () => (/* binding */ RemarksService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4363);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 698);


class RemarksService {
  http;
  baseUrl = 'http://localhost:3000/api';
  constructor(http) {
    this.http = http;
  }
  getTeachers() {
    return this.http.get(`${this.baseUrl}/teachers`);
  }
  getTeacherPerformance(id) {
    return this.http.get(`${this.baseUrl}/performance/${id}`);
  }
  static ɵfac = function RemarksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || RemarksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RemarksService,
    factory: RemarksService.ɵfac,
    providedIn: 'root'
  });
}

/***/ },

/***/ 4064
/*!**********************************************************************!*\
  !*** ./src/app/teacher-performance/teacher-performance.component.ts ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeacherPerformanceComponent: () => (/* binding */ TeacherPerformanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 9748);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 7839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 6124);
/* harmony import */ var _remarks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remarks.service */ 7920);








const _c0 = (a0, a1, a2) => ({
  "state-neutral": a0,
  "state-improved": a1,
  "state-de-improved": a2
});
function TeacherPerformanceComponent_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const teacher_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", teacher_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", teacher_r1.name, " ");
  }
}
function TeacherPerformanceComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Term Performance Progression (Bar Chart)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "canvas", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 11)(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Term Performance Chart (Line Graph)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "canvas", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r1.barData)("options", ctx_r1.chartOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx_r1.lineData)("options", ctx_r1.chartOptions);
  }
}
class TeacherPerformanceComponent {
  remarksService;
  cdr;
  teachersList = [];
  selectedTeacherId = null;
  remarks = 'Select a teacher from the dropdown menu to view performance analysis.';
  performanceState = 'neutral';
  barData = null;
  lineData = null;
  chartOptions = {
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
            weight: 'normal',
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
  constructor(remarksService, cdr) {
    this.remarksService = remarksService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.remarksService.getTeachers().subscribe({
      next: data => {
        this.teachersList = data;
        this.cdr.detectChanges();
      },
      error: () => {
        this.remarks = 'Failed to load teachers directory from database.';
        this.cdr.detectChanges();
      }
    });
  }
  formatMarkdownToHtml(markdownText) {
    if (!markdownText) return '';
    let formatted = markdownText;
    formatted = formatted.replace(/###\s*(.*?)(?=\n|$)/g, '<h3 style="margin-top: 18px; margin-bottom: 8px; font-size: 18px; font-weight: bold; text-align: left;">$1</h3>');
    formatted = formatted.replace(/^\s*-\s*(.*?)(?=\n|$)/gm, '<li style="margin-bottom: 6px; line-height: 1.6; list-style-type: disc; margin-left: 20px; text-align: left;">$1</li>');
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
  }
  onTeacherChange() {
    if (this.selectedTeacherId === null) return;
    this.remarks = 'AI is analyzing performance trends...';
    this.performanceState = 'neutral';
    this.barData = null;
    this.lineData = null;
    this.cdr.detectChanges();
    this.remarksService.getTeacherPerformance(this.selectedTeacherId).subscribe({
      next: res => {
        this.remarks = this.formatMarkdownToHtml(res.remarks || '');
        const upperRemarks = res.remarks ? res.remarks.toUpperCase() : '';
        const barColorsPalette = ['#ef4444', '#f97316', '#3b82f6'];
        let trajectoryAccentColor = '#3b82f6';
        let trajectoryFillColor = 'rgba(59, 130, 246, 0.08)';
        if (upperRemarks.includes('DE-IMPROVED') || upperRemarks.includes('DECLINED')) {
          this.performanceState = 'de-improved';
          trajectoryAccentColor = '#dc2626';
          trajectoryFillColor = 'rgba(220, 38, 38, 0.08)';
        } else if (upperRemarks.includes('IMPROVED') || upperRemarks.includes('PROGRESS')) {
          this.performanceState = 'improved';
          trajectoryAccentColor = '#059669';
          trajectoryFillColor = 'rgba(5, 150, 105, 0.08)';
        }
        this.barData = {
          labels: res.terms,
          datasets: [{
            data: res.marks,
            label: 'Term Scores Breakdown',
            backgroundColor: barColorsPalette,
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
      error: () => {
        this.remarks = 'Failed to fetch analytics tracking data from server.';
        this.performanceState = 'neutral';
        this.cdr.detectChanges();
      }
    });
  }
  static ɵfac = function TeacherPerformanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TeacherPerformanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_remarks_service__WEBPACK_IMPORTED_MODULE_5__.RemarksService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: TeacherPerformanceComponent,
    selectors: [["app-teacher-performance"]],
    decls: 13,
    vars: 10,
    consts: [[1, "analytics-container"], [1, "dropdown-wrapper"], ["for", "teacherSelect"], ["id", "teacherSelect", 3, "ngModelChange", "change", "ngModel"], ["disabled", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "charts-grid", 4, "ngIf"], [1, "ai-remarks-section", 3, "ngClass"], [1, "remarks-text", 3, "innerHTML"], [3, "ngValue"], [1, "charts-grid"], [1, "chart-box"], [1, "canvas-wrapper"], ["baseChart", "", "type", "bar", 3, "data", "options"], ["baseChart", "", "type", "line", 3, "data", "options"]],
    template: function TeacherPerformanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Teacher Performance Analytics Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Select Teacher Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function TeacherPerformanceComponent_Template_select_ngModelChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.selectedTeacherId, $event) || (ctx.selectedTeacherId = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TeacherPerformanceComponent_Template_select_change_6_listener() {
          return ctx.onTeacherChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "-- Select a Teacher from List --");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TeacherPerformanceComponent_option_9_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TeacherPerformanceComponent_div_10_Template, 11, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedTeacherId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.teachersList);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.barData && ctx.lineData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](6, _c0, ctx.performanceState === "neutral", ctx.performanceState === "improved", ctx.performanceState === "de-improved"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.remarks, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng2_charts__WEBPACK_IMPORTED_MODULE_2__.NgChartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective],
    styles: [".analytics-container[_ngcontent-%COMP%] {\n  padding: 40px;\n  font-family: 'Times New Roman', Times, serif !important;\n  color: #1a202c;\n  max-width: 1300px;\n  margin: 0 auto;\n  background-color: #f8fafc;\n  min-height: 100vh;\n}\nh2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], p[_ngcontent-%COMP%], label[_ngcontent-%COMP%], select[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  font-family: 'Times New Roman', Times, serif !important;\n}\nh2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  color: #0f172a;\n  margin-bottom: 32px;\n  border-bottom: 2px solid #e2e8f0;\n  padding-bottom: 16px;\n}\n.dropdown-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  background: #ffffff;\n  padding: 16px 24px;\n  border-radius: 12px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  border: 1px solid #e2e8f0;\n  width: fit-content;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  color: #334155;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 10px 18px;\n  font-size: 16px;\n  font-weight: bold;\n  color: #1e293b;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background-color: #ffffff;\n  min-width: 300px;\n  cursor: pointer;\n  outline: none;\n}\n.dropdown-wrapper[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #3b82f6;\n}\n.charts-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 32px;\n  margin-bottom: 40px;\n  width: 100%;\n}\n.chart-box[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 450px;\n  background-color: #ffffff;\n  border: 1px solid #e2e8f0;\n  padding: 30px;\n  border-radius: 16px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n}\n.chart-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #1e293b;\n  margin-top: 0;\n  margin-bottom: 24px;\n  text-align: center;\n  font-weight: bold;\n}\n.canvas-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  height: 360px;\n  width: 100%;\n}\n.ai-remarks-section[_ngcontent-%COMP%] {\n  padding: 30px;\n  border-radius: 16px;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);\n  border: 1px solid transparent;\n  transition: all 0.2s ease-in-out;\n}\n.ai-remarks-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 12px;\n  font-size: 22px;\n  font-weight: bold;\n}\n.remarks-text[_ngcontent-%COMP%] {\n  line-height: 1.8;\n  margin-bottom: 0;\n  font-size: 18px;\n}\n.state-neutral[_ngcontent-%COMP%] {\n  background-color: #f8fafc;\n  border-left: 6px solid #64748b;\n  border: 1px solid #e2e8f0;\n}\n.state-neutral[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { color: #334155; }\n.state-neutral[_ngcontent-%COMP%]   .remarks-text[_ngcontent-%COMP%] { color: #475569; font-style: italic; }\n\n.state-improved[_ngcontent-%COMP%] {\n  background-color: #f0fdf4; \n  border-left: 6px solid #10b981;\n  border-top: 1px solid #bbf7d0;\n  border-right: 1px solid #bbf7d0;\n  border-bottom: 1px solid #bbf7d0;\n}\n.state-improved[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { color: #14532d; }\n.state-improved[_ngcontent-%COMP%]   .remarks-text[_ngcontent-%COMP%] { color: #166534; font-weight: bold; }\n.state-de-improved[_ngcontent-%COMP%] {\n  background-color: #fef2f2; \n  border-left: 6px solid #ef4444;\n  border-top: 1px solid #fecaca;\n  border-right: 1px solid #fecaca;\n  border-bottom: 1px solid #fecaca;\n}\n.state-de-improved[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] { color: #7f1d1d; }\n.state-de-improved[_ngcontent-%COMP%]   .remarks-text[_ngcontent-%COMP%] { color: #991b1b; font-weight: bold; }\n@media (max-width: 1024px) {\n  .charts-grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 24px;\n  }\n  .chart-box[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n.remarks-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 15px;\n  margin-bottom: 8px;\n  color: inherit; \n}\n.remarks-text[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-bottom: 12px;\n  padding-left: 20px;\n}\n.remarks-text[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  line-height: 1.6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXItcGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1REFBdUQ7RUFDdkQsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdURBQXVEO0FBQ3pEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4Q0FBOEM7RUFDOUMsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCO0FBQ0Esb0JBQW9CLGNBQWMsRUFBRTtBQUNwQywrQkFBK0IsY0FBYyxFQUFFLGtCQUFrQixFQUFFOztBQUVuRTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7QUFDQSxxQkFBcUIsY0FBYyxFQUFFO0FBQ3JDLGdDQUFnQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUU7QUFDbkU7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDO0FBQ0Esd0JBQXdCLGNBQWMsRUFBRTtBQUN4QyxtQ0FBbUMsY0FBYyxFQUFFLGlCQUFpQixFQUFFO0FBQ3RFO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztFQUNYO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoidGVhY2hlci1wZXJmb3JtYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuYWx5dGljcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzFhMjAyYztcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmgyLCBoMywgaDQsIHAsIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuLmRyb3Bkb3duLXdyYXBwZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5kcm9wZG93bi13cmFwcGVyIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcbn1cclxuLmRyb3Bkb3duLXdyYXBwZXIgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZHJvcGRvd24td3JhcHBlciBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzNiODJmNjtcclxufVxyXG4uY2hhcnRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hhcnQtYm94IHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5jaGFydC1ib3ggaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jYW52YXMtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFpLXJlbWFya3Mtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmFpLXJlbWFya3Mtc2VjdGlvbiBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmVtYXJrcy10ZXh0IHtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zdGF0ZS1uZXV0cmFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzY0NzQ4YjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG59XHJcbi5zdGF0ZS1uZXV0cmFsIGg0IHsgY29sb3I6ICMzMzQxNTU7IH1cclxuLnN0YXRlLW5ldXRyYWwgLnJlbWFya3MtdGV4dCB7IGNvbG9yOiAjNDc1NTY5OyBmb250LXN0eWxlOiBpdGFsaWM7IH1cclxuXHJcbi5zdGF0ZS1pbXByb3ZlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmRmNDsgXHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMTBiOTgxO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJmN2QwO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbn1cclxuLnN0YXRlLWltcHJvdmVkIGg0IHsgY29sb3I6ICMxNDUzMmQ7IH1cclxuLnN0YXRlLWltcHJvdmVkIC5yZW1hcmtzLXRleHQgeyBjb2xvcjogIzE2NjUzNDsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuLnN0YXRlLWRlLWltcHJvdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMmYyOyBcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNlZjQ0NDQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZWNhY2E7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZlY2FjYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZlY2FjYTtcclxufVxyXG4uc3RhdGUtZGUtaW1wcm92ZWQgaDQgeyBjb2xvcjogIzdmMWQxZDsgfVxyXG4uc3RhdGUtZGUtaW1wcm92ZWQgLnJlbWFya3MtdGV4dCB7IGNvbG9yOiAjOTkxYjFiOyBmb250LXdlaWdodDogYm9sZDsgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNoYXJ0cy1ncmlkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgfVxyXG4gIC5jaGFydC1ib3gge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnJlbWFya3MtdGV4dCBoMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGNvbG9yOiBpbmhlcml0OyBcclxufVxyXG4ucmVtYXJrcy10ZXh0IHVsIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnJlbWFya3MtdGV4dCBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVhY2hlci1wZXJmb3JtYW5jZS90ZWFjaGVyLXBlcmZvcm1hbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdURBQXVEO0VBQ3ZELGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5Q0FBeUM7RUFDekMseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOENBQThDO0FBQ2hEO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjtBQUNBLG9CQUFvQixjQUFjLEVBQUU7QUFDcEMsK0JBQStCLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTs7QUFFbkU7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDO0FBQ0EscUJBQXFCLGNBQWMsRUFBRTtBQUNyQyxnQ0FBZ0MsY0FBYyxFQUFFLGlCQUFpQixFQUFFO0FBQ25FO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQztBQUNBLHdCQUF3QixjQUFjLEVBQUU7QUFDeEMsbUNBQW1DLGNBQWMsRUFBRSxpQkFBaUIsRUFBRTtBQUN0RTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBLDRrT0FBNGtPIiwic291cmNlc0NvbnRlbnQiOlsiLmFuYWx5dGljcy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzFhMjAyYztcclxuICBtYXgtd2lkdGg6IDEzMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcbmgyLCBoMywgaDQsIHAsIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuLmRyb3Bkb3duLXdyYXBwZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcbi5kcm9wZG93bi13cmFwcGVyIGxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMzMzQxNTU7XHJcbn1cclxuLmRyb3Bkb3duLXdyYXBwZXIgc2VsZWN0IHtcclxuICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZHJvcGRvd24td3JhcHBlciBzZWxlY3Q6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzNiODJmNjtcclxufVxyXG4uY2hhcnRzLWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBnYXA6IDMycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hhcnQtYm94IHtcclxuICBmbGV4OiAxO1xyXG4gIG1pbi13aWR0aDogNDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcbi5jaGFydC1ib3ggaDMge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jYW52YXMtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFpLXJlbWFya3Mtc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmFpLXJlbWFya3Mtc2VjdGlvbiBoNCB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ucmVtYXJrcy10ZXh0IHtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zdGF0ZS1uZXV0cmFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgIzY0NzQ4YjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG59XHJcbi5zdGF0ZS1uZXV0cmFsIGg0IHsgY29sb3I6ICMzMzQxNTU7IH1cclxuLnN0YXRlLW5ldXRyYWwgLnJlbWFya3MtdGV4dCB7IGNvbG9yOiAjNDc1NTY5OyBmb250LXN0eWxlOiBpdGFsaWM7IH1cclxuXHJcbi5zdGF0ZS1pbXByb3ZlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmRmNDsgXHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjMTBiOTgxO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmJmN2QwO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmY3ZDA7XHJcbn1cclxuLnN0YXRlLWltcHJvdmVkIGg0IHsgY29sb3I6ICMxNDUzMmQ7IH1cclxuLnN0YXRlLWltcHJvdmVkIC5yZW1hcmtzLXRleHQgeyBjb2xvcjogIzE2NjUzNDsgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cclxuLnN0YXRlLWRlLWltcHJvdmVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmMmYyOyBcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICNlZjQ0NDQ7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmZWNhY2E7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZlY2FjYTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZlY2FjYTtcclxufVxyXG4uc3RhdGUtZGUtaW1wcm92ZWQgaDQgeyBjb2xvcjogIzdmMWQxZDsgfVxyXG4uc3RhdGUtZGUtaW1wcm92ZWQgLnJlbWFya3MtdGV4dCB7IGNvbG9yOiAjOTkxYjFiOyBmb250LXdlaWdodDogYm9sZDsgfVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNoYXJ0cy1ncmlkIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgfVxyXG4gIC5jaGFydC1ib3gge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnJlbWFya3MtdGV4dCBoMyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGNvbG9yOiBpbmhlcml0OyBcclxufVxyXG4ucmVtYXJrcy10ZXh0IHVsIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbn1cclxuLnJlbWFya3MtdGV4dCBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ },

/***/ 4429
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 4967);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.component */ 92);


(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent);

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map