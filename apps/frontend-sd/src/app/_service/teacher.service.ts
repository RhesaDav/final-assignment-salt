import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  AddTeacher(data:any):Observable<any>{
    console.log('data:', data)
    return this.http.post<any>(`${port}/api/teacher/register`, data)
  }
  getTotalTeacher():Observable<any>{
    return this.http.get<any>(`${port}/api/teacher/count`)
  }
  getAllTeacher():Observable<any[]>{
    return this.http.get<any[]>(`${port}/api/teacher`)
  }
  
}
