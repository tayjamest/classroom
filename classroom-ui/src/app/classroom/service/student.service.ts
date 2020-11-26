import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Student} from './student';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private addStudentUrl = '//localhost:8080/student';

  constructor(private httpClient: HttpClient) {}

  public saveStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.addStudentUrl, student, {
      headers: new HttpHeaders()
        .set('Accept', 'application/vnd.classroom.student-v1.0+json')
        .set('Content-Type', 'application/vnd.classroom.student-v1.0+json'),
    });
  }
}
