import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';

const classroomRoutes: Routes = [
  {
    path: 'classroom',
    component: AddStudentComponent,
    // children: [
    //   {
    //     path: ':action', component: ProductCatalogAddEditComponent
    //   }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(classroomRoutes)],
  exports: [RouterModule],
})
export class ClassroomRoutingModule {}
