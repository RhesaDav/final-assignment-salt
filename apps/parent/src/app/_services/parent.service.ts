/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import {parent} from '../_models/parent'

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }

  getParentById(id:any): Observable<parent>{
    return this.http.get<parent>(`${port}/api/parent/${id}`)
  }
}
