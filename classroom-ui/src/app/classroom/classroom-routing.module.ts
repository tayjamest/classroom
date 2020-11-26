import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {AttendanceComponent} from "./attendance/attendance.component";

const classroomRoutes: Routes = [
  {
    path: 'classroom',
    component: AddStudentComponent,
    // children: [
    //   {
    //     path: ':action', component: ProductCatalogAddEditComponent
    //   }]
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(classroomRoutes)],
  exports: [RouterModule],
})
export class ClassroomRoutingModule {}
