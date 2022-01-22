import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Student } from '../_models/student';

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudentByID(id: string): Observable<Student> {
    return this.http.get<Student>(`${port}/api/student/${id}`);
  }
  editStudent(id: string, data: any): Observable<Student> {
    return this.http.put<Student>(`${port}/api/student/bystudent/${id}`, data);
  }
  editStudentImageByStudent(idStudent: any, data: any): Observable<Student> {
    return this.http.put<Student>(
      `${port}/api/student/bystudent/image/${idStudent}`,
      data
    );
  }
  
}
