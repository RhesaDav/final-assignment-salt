import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-class-by-score',
  templateUrl: './class-by-score.component.html',
  styleUrls: ['./class-by-score.component.css']
})
export class ClassByScoreComponent implements OnInit {

  public dataSource = new MatTableDataSource<Student>()
  public displayedColumns = ['nama','matematika','bahasaInggris','fisika','bahasaIndonesia']

  @ViewChild(MatPaginator) paginator:MatPaginator

  @Input() public parentData: any
  student: Student[] = [] 

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.studentService.getAllStudentRelatedToTheClass(this.parentData).subscribe((result) => {
      this.student = result
      console.log('muridny',this.student)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
  }

}
