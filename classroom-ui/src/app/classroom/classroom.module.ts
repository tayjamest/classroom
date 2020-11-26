import {NgModule} from '@angular/core';
import {AddStudentComponent} from './add-student/add-student.component';
import {ClassroomRoutingModule} from './classroom-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AttendanceComponent} from "./attendance/attendance.component";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {NgxBootstrapMultiselectModule} from "ngx-bootstrap-multiselect";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReportsComponent} from "./reports/reports.component";

@NgModule({
  declarations: [AddStudentComponent, AttendanceComponent, ReportsComponent],
  imports: [ClassroomRoutingModule, ReactiveFormsModule, BrowserAnimationsModule,
    FormsModule, HttpClientModule, BrowserModule, CommonModule, NgxBootstrapMultiselectModule, BsDatepickerModule.forRoot()],
  exports: [
    ClassroomRoutingModule,
    AddStudentComponent,
    AttendanceComponent,
    ReportsComponent
  ],
  providers: [],
})
export class ClassroomModule {
}
