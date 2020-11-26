import { NgModule } from '@angular/core';
import {AddStudentComponent} from './add-student/add-student.component';
import {ClassroomRoutingModule} from './classroom-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AddStudentComponent],
  imports: [ClassroomRoutingModule, ReactiveFormsModule,
    FormsModule, HttpClientModule ],
  exports: [
    ClassroomRoutingModule,
    AddStudentComponent
  ],
  providers: [],
})
export class ClassroomModule {}
