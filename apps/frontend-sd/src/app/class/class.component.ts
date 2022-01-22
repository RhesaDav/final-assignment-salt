/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { kelas } from '../_models/kelas';
import { Student } from '../_models/student';
import { KelasServices } from '../_service/kelas.service';
import { StudentService } from '../_service/student.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  public displayedColumns = ['nama','bInggris','bIndonesia']

  public dataSource = new MatTableDataSource<Student>()

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private kelasService: KelasServices, private studentService: StudentService) { }
  kelas?: kelas[]
  student?: Student[]=[]
  
  ngOnInit(): void {
    // this.getAllStudentRelatedToTheClass()

    this.kelasService.getAllClass().subscribe(result => {
      this.kelas= result
      console.log(this.kelas)
    })

    // this.studentService.getAllStudentRelatedToTheClass('61dd65db591ae97754b4065c').subscribe(result => {
    //   this.student= result
    //   console.log('abc:', this.student)
    // })
  }

  // public getAllStudentRelatedToTheClass = () => {
  //   this.studentService.getAllStudentRelatedToTheClass().subscribe(resultByClass => {
  //     this.dataSource.data = resultByClass
  //     console.log('Sini om',resultByClass)
  //   })
  // }

  ngAfterViweInit(): void {
    this.dataSource.paginator =this.paginator
  }

}