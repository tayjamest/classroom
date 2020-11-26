import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {AttendanceComponent} from "./attendance/attendance.component";
import {ReportsComponent} from "./reports/reports.component";

const classroomRoutes: Routes = [
  {
    path: 'classroom',
    component: AddStudentComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(classroomRoutes)],
  exports: [RouterModule],
})
export class ClassroomRoutingModule {}
