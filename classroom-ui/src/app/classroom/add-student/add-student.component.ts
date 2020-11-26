import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../service/student';
import {StudentService} from '../service/student.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.less'],
})
export class AddStudentComponent implements OnInit {


  public addStudentForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  public save(): void {
    const student: Student = new Student();

    student.firstName = this.addStudentForm.controls.firstName.value;
    student.lastName = this.addStudentForm.controls.lastName.value;
    student.grade = this.addStudentForm.controls.grade.value;

    this.studentService.saveStudent(student).subscribe((val) => {
    }, (error) => {
    }, () => {
      this.addStudentForm.reset();
    });
  }

  private buildForm(): void {
    this.addStudentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      grade: ['', Validators.required]
    });
  }

}
