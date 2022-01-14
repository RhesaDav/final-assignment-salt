import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute) { }

  studentData : any
  idStudent : any

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idStudent = [params['idStudent']]
      console.log('id student :', this.idStudent)
    })
    this.studentService.getStudentById(this.idStudent).subscribe((hasil) => {
      this.studentData = hasil
      console.log('hasil :', hasil)
    })
  }

}
