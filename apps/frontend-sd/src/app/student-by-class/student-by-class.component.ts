/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-sd-student-by-class',
  templateUrl: './student-by-class.component.html',
  styleUrls: ['./student-by-class.component.css'],
})
export class StudentByClassComponent implements OnInit {
  @Input() public parentData: any;
  student: Student[] = [];
  constructor(private studentService: StudentService) {}
  ngOnInit(): void {
    this.studentService
      .getAllStudentRelatedToTheClass(this.parentData)
      .subscribe((result) => {
        this.student = result;
        console.log('related to the class:', this.student);
      });
  }
}
