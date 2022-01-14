import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }
  
  AddParent(data:any):Observable<any>{
    console.log('data:', data)
    return this.http.post<any>(`${port}/api/parent/register`, data)
  }
  getTotalParent():Observable<any>{
    return this.http.get<any>(`${port}/api/parent/count`)
  }
  getAllParent():Observable<any>{
    return this.http.get<any>(`${port}/api/parent`)
  }
  
}
