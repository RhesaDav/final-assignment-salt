import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) { }
  
  getAllSubjects():Observable<any[]>{
    return this.http.get<any[]>(`${port}/api/subject`)
  }

  AddSubject(data:any):Observable<any>{
    console.log('data:', data)
    return this.http.post<any>(`${port}/api/subject`, data)
  }
}
