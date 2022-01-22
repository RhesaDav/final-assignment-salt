/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort'
import { Student } from '../_models/student';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.css']
})
export class AcademicYearComponent implements OnInit {

  public displayedColumns = ['id','name','gender', 'academicYear', 'status']
  public dataSource = new MatTableDataSource<Student>()
  public doFilter = (value:string) => {
    this.dataSource.filter = value.trim().toLowerCase()
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService:StudentService) {
  }

  ngOnInit(): void {
    this.getAllStudent()
  }

  public getAllStudent = () => {
    this.studentService.getAllStudent().subscribe(resultStudent => {
      this.dataSource.data = resultStudent
      console.log('nih om',this.dataSource.data)
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }
  
}