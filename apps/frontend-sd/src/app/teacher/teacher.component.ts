import { Component, OnInit } from '@angular/core';
import { Teacher } from '../_models/teacher';
import { TeacherService } from '../_service/teacher.service';

@Component({
  selector: 'frontend-sd-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private teacherService:TeacherService) { }
  teachers: Teacher[]=[]
  // subject:any[]=[]

  ngOnInit(): void {
    this.teacherService.getAllTeacher().subscribe(result => {
      this.teachers= result
      console.log(result)
    })
  }

}