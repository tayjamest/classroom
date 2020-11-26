import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Student} from '../service/student';
import {StudentService} from '../service/student.service';
import {Subject} from "../service/subject";
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import {Report} from "../service/report";
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'attendance-student',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.less'],
})
export class ReportsComponent implements OnInit {


  public reportsForm: FormGroup;
  public students: Student[] = [];
  public subjects: Subject[] = [];
  public reportToDisplay: Report;
  public studentToDisplay: Student = new Student();
  public subjectToDisplay: Subject = new Subject();

  studentOption: IMultiSelectOption[] = [];
  subjectOption: IMultiSelectOption[] = [];
  monthOption: IMultiSelectOption[] = [];
  dropdownSetting: any;

  constructor(private formBuilder: FormBuilder,
              private studentService: StudentService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.dropdownSetting = {
      selectionLimit: 1,
    };
    this.monthOption = [
      {id: 1, name: 'January'},
      {id: 2, name: 'February'},
      {id: 3, name: 'March'},
      {id: 4, name: 'April'},
      {id: 5, name: 'May'},
      {id: 6, name: 'June'},
      {id: 7, name: 'July'},
      {id: 8, name: 'August'},
      {id: 9, name: 'September'},
      {id: 10, name: 'October'},
      {id: 11, name: 'November'},
      {id: 12, name: 'December'}
      ];

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
    const report: Report = new Report();

    report.subjectId = this.reportsForm.controls.subject.value[0];
    report.studentId = this.reportsForm.controls.student.value[0];

    this.studentService.getReport(report).subscribe((val) => {
      this.reportToDisplay = val;
      this.studentToDisplay = this.students.filter((student) => student.id === val.studentId)[0];
      this.subjectToDisplay = this.subjects.filter((subject) => subject.id === val.subjectId)[0];
      console.log(this.reportToDisplay);
    });
    this.reportsForm.reset();
  }

  private buildForm(): void {
    this.reportsForm = this.formBuilder.group({
      date: [this.monthOption, Validators.required],
      student: [[], Validators.required],
      subject: [this.subjects, Validators.required]
    });
  }

}
