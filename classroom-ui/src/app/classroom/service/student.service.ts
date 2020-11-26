import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from './student';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Subject} from "./subject";
import {Attendance} from "./attendance";
import {Report} from "./report";

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private addStudentUrl = '//localhost:8080/';
  private subjectUrl = '../../../assets/classes.json';

  constructor(private httpClient: HttpClient) {}

  public saveStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.addStudentUrl + 'student', student, {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.classroom.student-v1.0+json')
        .set('Content-Type', 'application/vnd.classroom.student-v1.0+json'),
    });
  }

  public getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.addStudentUrl + 'students', {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.classroom.students-v1.0+json')
        .set('Content-Type', 'application/vnd.classroom.students-v1.0+json'),
    });
  }

  public getReport(report: Report): Observable<Report> {
    return this.httpClient.post<Report>(this.addStudentUrl + 'report', report, {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.classroom.report-v1.0+json')
        .set('Content-Type', 'application/vnd.classroom.report-v1.0+json'),
    });
  }

  public saveAttendance(attendance: Attendance): Observable<Attendance> {
    return this.httpClient.post<Attendance>(this.addStudentUrl + 'attendance', attendance, {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.classroom.attendance-v1.0+json')
        .set('Content-Type', 'application/vnd.classroom.attendance-v1.0+json'),
    });
  }

  public getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.subjectUrl);
  }
}
