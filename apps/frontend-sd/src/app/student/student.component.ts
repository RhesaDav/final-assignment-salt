import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }
  students: Student[]=[]

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(result => {
      this.students= result
      console.log(this.students)
    })
  }

}
