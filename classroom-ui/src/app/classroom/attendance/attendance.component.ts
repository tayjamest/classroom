import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../service/student';
import {StudentService} from '../service/student.service';
import {Subject} from "../service/subject";
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import {Attendance} from "../service/attendance";
import {arrayify} from "tslint/lib/utils";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'attendance-student',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.less'],
})
export class AttendanceComponent implements OnInit {


  public attendanceForm: FormGroup;
  public students: Student[] = [];
  public subjects: Subject[] = [];

  studentOption: IMultiSelectOption[] = [];
  subjectOption: IMultiSelectOption[] = [];
  dropdownSetting: any;
  selectedStudents: any = [];

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.dropdownSetting = {
      selectionLimit: 1,
    };
    this.getStudents();
    this.getSubjects();
  }

  private getStudents(): void {
    this.studentService.getStudents().subscribe((val) => {
      this.students = val;

      this.students.forEach((student) => {
        this.studentOption.push({id: +student.id, name: student?.firstName});
      });

    });
  }

  private getSubjects(): void {
    this.studentService.getSubjects().subscribe((val) => {
      this.subjects = val;

      this.subjects.forEach((student) => {
        this.subjectOption.push({id: +student.id, name: student?.name});
      });
    })
  }

  public save(): void {
    this.selectedStudents.forEach((item) => {
      const attendance: Attendance = new Attendance();

      attendance.date = this.attendanceForm.controls.date.value;
      attendance.subjectId = this.attendanceForm.controls.subject.value[0];

      console.log(item);
      attendance.studentId = item;

      console.log(attendance);

      this.studentService.saveAttendance(attendance).subscribe((val) => {
      })
    });
 this.attendanceForm.reset();
  }

  private buildForm(): void {
    this.attendanceForm = this.formBuilder.group({
      date: ['', Validators.required],
      student: [[], Validators.required],
      subject: [this.subjects, Validators.required]
    });
  }

}
