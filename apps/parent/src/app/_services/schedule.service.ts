/* eslint-disable @typescript-eslint/no-empty-function */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from '../_models/schedule';
import { environment } from '../../environments/environment';

const port = environment.port

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  // DIPAKE
  getScheduleByID(id: string): Observable<Schedule> {
    return this.http.get<Schedule>(`${port}/api/schedule/${id}`);
  }

  getScheduleByStudent(idStudent: string): Observable<Schedule> {
    return this.http.get<Schedule>(
      `${port}/api/schedule/byStudent/${idStudent}`
    );
  }
}
