/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { kelas } from '../_models/kelas';
import { KelasServices } from '../_service/kelas.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor(private kelasService: KelasServices) { }
  kelas: kelas[]=[]

  ngOnInit(): void {
    this.kelasService.getAllClass().subscribe(result => {
      this.kelas= result
      console.log(this.kelas)
    })
  }

}
