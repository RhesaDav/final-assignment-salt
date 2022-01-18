import { Component, OnInit } from '@angular/core';
import { kelas } from '../_models/kelas';
import { Student } from '../_models/student';
import { KelasServices } from '../_service/kelas.service';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private studentService:StudentService, private kelasService: KelasServices) { }
  allStudent: Student[]=[]
  student:Student[]=[]
  kelas:kelas[]=[]
  panelOpenState=true

  ngOnInit(): void {
    this.studentService.getAllStudent().subscribe(allResult => {
      this.allStudent= allResult
      console.log('all student:', this.allStudent)
    })
    
    this.kelasService.getAllClass().subscribe(result  => {
      this.kelas = result
      console.log('kelas:', this.kelas)
    })
  }
  
  getAllStudentByClass(id:any){
    this.studentService.getAllStudentRelatedToTheClass(id).subscribe(result => {
      this.student= result
      console.log('related to the class:', this.student)
    })
  }
}
